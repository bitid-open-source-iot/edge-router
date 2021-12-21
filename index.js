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
global.__router = null;
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

                app.use((req, res, next) => {
                    if (__settings.authentication) {
                        if (req.method != 'GET' && req.method != 'PUT') {
                            var args = {
                                'req': req,
                                'res': res
                            };

                            try {
                                if (typeof (args.req.body.header) != 'undefined' && args.req.body.header != null) {
                                    var authenticated = true;
                                    if (typeof (args.req.body.header.email) != 'undefined' && args.req.body.header.email != null) {
                                        if (args.req.body.header.email != __settings.admin.email) {
                                            authenticated = false;
                                        };
                                    } else {
                                        authenticated = false;
                                        throw 'Invalid payload header.email!';
                                    };
                                    if (typeof (args.req.body.header.password) != 'undefined' && args.req.body.header.password != null) {
                                        if (args.req.body.header.password != __settings.admin.password) {
                                            authenticated = false;
                                        };
                                    } else {
                                        authenticated = false;
                                        throw 'Invalid payload header.password!';
                                    };
                                    if (authenticated) {
                                        next();
                                    } else {
                                        throw 'Invalid Credentials!';
                                    };
                                } else {
                                    throw 'Invalid payload header!';
                                };
                            } catch (error) {
                                var err = new ErrorResponse();
                                err.error.code = 401;
                                err.error.errors[0].code = 401;
                                err.error.errors[0].reason = error.message;
                                err.error.errors[0].message = 'Invalid Credentials';
                                __responder.error(req, res, err);
                            };
                        } else {
                            next();
                        };
                    } else {
                        next();
                    };
                });

                app.use('/', express.static(__dirname + '/app/dist/edge-router/'));
                app.get('/*', (req, res) => {
                    res.sendFile(__dirname + '/app/dist/edge-router/index.html');
                });

                app.use('/edge-router/admin', require('./api/admin'));
                __logger.info('Loaded: ./edge-router/admin');

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
                __router = new EdgeRouter(__settings);

                __router.on('control', event => {
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
                                __router.route(event.rtuId, data);
                            };
                        };
                    });
                });

                __settings.devices.filter(o => o.enabled).map(o => {
                    switch (o.type) {
                        case ('modbus'):
                            var device = new Modbus(o);
                            device.on('change', event => __router.route(device.deviceId, event));
                            __devices.push(device);
                            break;
                        case ('external'):
                            var device = new External(o);
                            __devices.push(device);
                            break;
                        case ('programmable-logic-controller'):
                            var device = new ProgrammableLogicController(o);
                            device.on('change', event => __router.route(device.deviceId, event));
                            __devices.push(device);
                            break;
                        default:
                            __logger.warn('Device Type Not Found!')
                            break;
                    };
                });

                __router.on('connected', event => {
                    __settings.devices.filter(o => o.publish).map(device => {
                        __logger.info('Starting publish every ' + device.pxtime + ' seconds!');

                        send(device.deviceId);

                        setInterval(() => send(device.deviceId), (device.pxtime ? device.pxtime : 120) * 1000);
                    });
                });

                deferred.resolve();
            } catch (error) {
                deferred.reject(error);
            };

            return deferred.promise;
        }
    };
                        
    var send = (deviceId) => {
        __devices.map(device => {
            if (device.deviceId == deviceId) {
                __logger.info('DATA =================== ' + device.io.map(o => o.value).join(', '));

                device.io.map(a => {
                    device.values.map(b => {
                        if (a.inputId == b.inputId) {
                            a.value = b.value;
                        };
                    });
                });

                const modules = device.io.map(input => input.moduleId).filter(value => (typeof (value) != 'undefined' && value != null)).filter((value, index, self) => self.indexOf(value) === index);
                modules.map(async moduleId => {
                    var dataIn = {
                        'AI1': 0,
                        'AI2': 0,
                        'AI3': 0,
                        'AI4': 0,
                        'AIExt1': 0,
                        'AIExt2': 0,
                        'AIExt3': 0,
                        'AIExt4': 0,
                        'AIExt5': 0,
                        'AIExt6': 0,
                        'AIExt7': 0,
                        'AIExt8': 0,
                        'BATT': 0,
                        'CI1': 0,
                        'CI2': 0,
                        'CI3': 0,
                        'CI4': 0,
                        'CI5': 0,
                        'CI6': 0,
                        'CI7': 0,
                        'CI8': 0,
                        'LAT': 0,
                        'LNG': 0,
                        'SIG': 0,
                        'TEXT1': 0,
                        'TEXT2': 0,
                        'TEXT3': 0,
                        'TEXT4': 0,
                        'txFlag': 0,
                        'digitalsIn': device.io.filter(o => o.value == 1 && o.key == 'digitalsIn' && o.moduleId == moduleId).map(o => Math.pow(2, o.bit)).reduce((a, b) => a + b, 0)
                    };

                    device.io.map(input => {
                        if (input.moduleId == moduleId) {
                            if (dataIn.hasOwnProperty(input.key) && input.key != 'digitalsIn') {
                                dataIn[input.key] = input.value;
                            };
                        };
                    });
                    
                    __logger.info('Publishing Data To Server: ' + device.deviceId);

                    __router.publish({
                        'rtuId': device.deviceId,
                        'dataIn': dataIn,
                        'barcode': device.barcode,
                        'rtuDate': new Date().getTime(),
                        'moduleId': moduleId
                    });
                });
            };
        });
    };

    portal.init();
} catch (error) {
    console.log('The following error has occurred: ', error.message);
};

exports.module = module;