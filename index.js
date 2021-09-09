const Q = require('q');
const cors = require('cors');
const http = require('http');
const chalk = require('chalk');
const express = require('express');
const responder = require('./lib/responder');
const ErrorResponse = require('./lib/error-response');
const WebSocketServer = require('websocket').server;

/* --- DEVICES --- */
const Modbus = require('./devices/modbus');
const External = require('./devices/external');
const EdgeRouter = require('./devices/edge-router');
const ProgrammableLogicController = require('./devices/programmable-logic-controller');

global.__base = __dirname + '/';
global.__socket = null;
global.__logger = require('./lib/logger');
global.__devices = [];
global.__settings = require('./config.json');
global.__responder = responder.module();

try {
    var portal = {
        api: () => {
            var deferred = Q.defer();

            try {
                var app = express();

                app.use(cors());
                app.use(express.urlencoded({
                    limit: '50mb',
                    extended: true,
                    parameterLimit: 50000
                }));
                app.use(express.json({
                    limit: '50mb'
                }));

                app.use('/', express.static(__dirname + '/app/dist/edge-router/'));
                app.get('/*', (req, res) => {
                    res.sendFile(__dirname + '/app/dist/edge-router/index.html');
                });

                app.use('/edge-router/config', require('./api/config'));
                __logger.info('Loaded: ./edge-router/config');

                app.use('/edge-router/devices', require('./api/devices'));
                __logger.info('Loaded: ./edge-router/devices');

                app.use('/edge-router/mapping', require('./api/mapping'));
                __logger.info('Loaded: ./edge-router/mapping');

                app.use((error, req, res, next) => {
                    var err = new ErrorResponse();
                    err.error.errors[0].code = 500;
                    err.error.errors[0].reason = 'Something broke';
                    err.error.errors[0].message = 'Something broke';
                    __responder.error(req, res, err);
                });

                var server = http.createServer(app);
                server.listen(__settings.port, () => {
                    __socket = new WebSocketServer({
                        httpServer: server,
                        autoAcceptConnections: true
                    });
                    __logger.info('Webserver Running on port: ' + __settings.port);
                    deferred.resolve();
                });
            } catch (e) {
                __logger.error('initAPI catch error: ' + e);
                deferred.reject(e)
            };

            return deferred.promise;
        },

        init: () => {
            if (!__settings.production || !__settings.authentication) {
                var index = 0;
                console.log('');
                console.log('=======================');
                console.log('');
                console.log(chalk.yellow('Warning: '));
                if (!__settings.production) {
                    index++;
                    console.log('');
                    console.log(chalk.yellow(index + ': You are running in ') + chalk.red('"Development Mode!"') + chalk.yellow(' This can cause issues if this environment is a production environment!'));
                    console.log('');
                    console.log(chalk.yellow('To enable production mode, set the ') + chalk.bold(chalk.green('production')) + chalk.yellow(' variable in the config to ') + chalk.bold(chalk.green('true')) + chalk.yellow('!'));
                };
                if (!__settings.authentication) {
                    index++;
                    console.log('');
                    console.log(chalk.yellow(index + ': Authentication is not enabled ') + chalk.yellow(' This can cause issues if this environment is a production environment!'));
                    console.log('');
                    console.log(chalk.yellow('To enable Authentication mode, set the ') + chalk.bold(chalk.green('authentication')) + chalk.yellow(' variable in the config to ') + chalk.bold(chalk.green('true')) + chalk.yellow('!'));
                };
                console.log('');
                console.log('=======================');
                console.log('');
            };

            portal.logger()
                .then(portal.api, null)
                .then(portal.router, null)
                .then(() => {
                    __logger.info('Full Start Up Complete');
                }, err => {
                    __logger.error('Error Initializing: ' + err);
                });
        },

        logger: () => {
            var deferred = Q.defer();

            try {
                __logger.init();
                deferred.resolve();
            } catch (error) {
                deferred.reject(error);
            }

            return deferred.promise;
        },

        router: () => {
            var deferred = Q.defer();

            try {
                var router = new EdgeRouter(__settings);

                router.on('control', event => {
                    __devices.map(device => {
                        if (device.type == 'external' && device.deviceId == event.rtuId) {
                            var data = [];
                            var found = false;
                            device.io.map(input => {
                                if (input.moduleId == event.moduleId) {
                                    found = true;
                                    var tmp = {
                                        value: 0,
                                        inputId: input.inputId
                                    };
                                    if (input.key.indexOf('TEXT') == -1 && typeof (event.dataIn[input.key]) != 'undefined' && event.dataIn[input.key] != null) {
                                        tmp.value = parseInt(event.dataIn[input.key]);
                                    };
                                    data.push(tmp);
                                };
                            });
                            if (found) {
                                router.route(event.rtuId, data);
                            };
                        };
                    });
                });

                __settings.devices.filter(o => o.enabled).map(o => {
                    switch (o.type) {
                        case ('modbus'):
                            var device = new Modbus(o);
                            device.on('change', event => router.route(device.deviceId, event));
                            __devices.push(device);
                            break;
                        case ('external'):
                            var device = new External(o);
                            __devices.push(device);
                            break;
                        case ('programmable-logic-controller'):
                            var device = new ProgrammableLogicController(o);
                            device.on('change', event => router.route(device.deviceId, event));
                            __devices.push(device);
                            break;
                        default:
                            __logger.warn('Device Type Not Found!')
                            break;
                    };
                });

                deferred.resolve();

                require('./test')(router);
            } catch (error) {
                deferred.reject(error);
            }

            return deferred.promise;
        }
    };

    portal.init();
} catch (error) {
    console.log('The following error has occurred: ', error.message);
};

exports.module = module;