const Q = require('q');
const cors = require('cors');
const http = require('http');
const chalk = require('chalk');
const express = require('express');
const scaling = require('./lib/scaling');
const WebSocket = require('./lib/socket').WebSocket;
const responder = require('./lib/responder');
const ErrorResponse = require('./lib/error-response');

/* --- DEVICES --- */
const Modbus = require('./devices/modbus');
const External = require('./devices/external');
const EdgeRouter = require('./devices/edge-router');
const ProgrammableLogicController = require('./devices/programmable-logic-controller');
const KGATEWAY = require('./devices/kGateway')
const BitMask = require('./lib/bit-mask');
const { async } = require('q');
const { resolve } = require('path');


global.__base = __dirname + '/';
global.__socket = null;
global.__router = null;
global.__logger = require('./lib/logger');
global.__devices = [];
global.__settings = require('./config.json');
global.__responder = responder.module();

var testBusy = false

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
    'digitalsIn': 0
}

global.__routerStatus = [
    {
        'moduleId': 0,
        'dataIn': { ...dataIn }
    }
];

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

                app.use('/edge-router/settings', require('./api/settings'));
                __logger.info('Loaded: ./edge-router/settings');

                app.use((error, req, res, next) => {
                    var err = new ErrorResponse();
                    err.error.errors[0].code = 500;
                    err.error.errors[0].reason = 'Something broke';
                    err.error.errors[0].message = 'Something broke';
                    __responder.error(req, res, err);
                });

                var server = http.createServer(app);
                server.listen(__settings.port, () => {
                    __socket = new WebSocket(server);
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

        router: async () => {
            var deferred = Q.defer();

            try {
                __router = new EdgeRouter(__settings);


                __settings.mapping.map(m => {
                    let did = m.destination.deviceId
                    let iid = m.destination.inputId
                    let d = __settings.devices.find(d => d.deviceId == did)
                    let io = d.io.find(o => o.inputId == iid)
                    console.log(io.register)
                    m.destination.destinationRegister = io.register
                })

                __router.on('edge-router-control', event => {
                    __devices.map(device => {
                        if (device.deviceId == event?.rtuId || device.deviceId == event?.deviceId) {
                            device.io.map(input => {
                                if (input.moduleId == event.moduleId) {
                                    device.write(input.inputId, event.value)
                                }
                            })
                        }
                    })
                })

                // setTimeout(() => {
                //     __router.emit('control',
                //         {
                //             "rtuId": "000000000000000000000250",
                //             "moduleId": 0,
                //             "rtuDate": "2022-06-13T11:25:20.000Z",
                //             "raw": "%1 0210.035 250 9 1503319636 8 1536 1 0 0 0 0 0 0 0 0 0 0 0 0 21 4 0 3 0 5 0 0 125 68 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 > 43439 *",
                //             "dataIn": {
                //                 "digitalsIn": "1024",
                //                 "AI1": "0",
                //                 "AI2": "0",
                //                 "AI3": "0",
                //                 "AI4": "0",
                //                 "AIExt1": "0",
                //                 "AIExt2": "0",
                //                 "AIExt3": "0",
                //                 "AIExt4": "0",
                //                 "AIExt5": "0",
                //                 "AIExt6": "0",
                //                 "AIExt7": "0",
                //                 "AIExt8": "0",
                //                 "CI1": "21",
                //                 "CI2": "4",
                //                 "CI3": "0",
                //                 "CI4": "3",
                //                 "CI5": "0",
                //                 "CI6": "5",
                //                 "CI7": "0",
                //                 "CI8": "0",
                //                 "BATT": "125",
                //                 "SIG": "68",
                //                 "TEXT1": "0",
                //                 "TEXT2": "0",
                //                 "TEXT3": "0",
                //                 "TEXT4": "0"
                //             },
                //             "localId": "250"
                //         }
                //     )
                // }, 5000)

                __router.on('control', async event => {
                    var deferred = Q.defer()

                    // if(testBusy == true){
                    //     deferred.resolve({})
                    //     return
                    // }

                    if (event?.rtuId == '000000000000000000000250') {
                        console.log('')
                        // testBusy = true
   
                    }
                    let validDevice = __devices.find(o => o.deviceId == event?.rtuId)
                    if (validDevice) {
                        __logger.info(`external data: ${JSON.stringify(event)}`)

                        __devices.reduce((promise, device) => {
                            return promise.then(async () => {
                                var deferred = Q.defer()
                                if (device.type == 'external' && device.deviceId == event?.rtuId) {
                                    device.emit('data', {});
                                    var data = [];
                                    var found = false;


                                    await device.io.reduce((promise, input) => {
                                        return promise.then(async () => {
                                            var deferred = Q.defer()
                                            if (input.moduleId == event.moduleId) {
                                                console.log(input.key)
                                                found = true;
                                                var tmp = {
                                                    value: 0,
                                                    inputId: input.inputId
                                                };
                                                if (input.shift > 0 && input.key.indexOf('digitalsIn') > -1 && typeof (event.dataIn[input.key]) != 'undefined' && event.dataIn[input.key] != null) {
                                                    let shiftedValue = event.dataIn[input.key] >> input.shift;
                                                    if (input.masking?.enabled == true) {
                                                        tmp.value = BitMask(input.masking.bit, shiftedValue);
                                                        input.value = BitMask(input.masking.bit, shiftedValue);
                                                    } else {
                                                        tmp.value = shiftedValue;
                                                        input.value = shiftedValue;
                                                    }
                                                } else if (input.masking?.enabled && input.key.indexOf('digitalsIn') > -1 && typeof (event.dataIn[input.key]) != 'undefined' && event.dataIn[input.key] != null) {
                                                    tmp.value = BitMask(input.masking.bit, event.dataIn[input.key]);
                                                    input.value = BitMask(input.masking.bit, event.dataIn[input.key]);
                                                } else if (input.key.indexOf('TEXT') == -1 && typeof (event.dataIn[input.key]) != 'undefined' && event.dataIn[input.key] != null) {
                                                    switch (input.scaling?.type) {
                                                        case ('ntc'):
                                                            tmp.value = new scaling.module().scaleNTC(parseInt(event.dataIn[input.key]));
                                                            input.value = new scaling.module().scaleNTC(parseInt(event.dataIn[input.key]));
                                                            break;
                                                        case ('none'):
                                                            tmp.value = parseInt(event.dataIn[input.key]);
                                                            input.value = parseInt(event.dataIn[input.key]);
                                                            break;
                                                        case ('linear'):
                                                            tmp.value = new scaling.module().scaleAnalog(parseInt(event.dataIn[input.key]), input.scaling?.raw?.low, input.scaling?.raw?.high, input.scaling?.scaled?.low, input.scaling?.scaled?.high);
                                                            input.value = new scaling.module().scaleAnalog(parseInt(event.dataIn[input.key]), input.scaling?.raw?.low, input.scaling?.raw?.high, input.scaling?.scaled?.low, input.scaling?.scaled?.high);
                                                            break;
                                                        case ('invert'):
                                                            tmp.value = new scaling.module().scaleAnalog(parseInt(event.dataIn[input.key]), input.scaling.raw.low, input.scaling.raw.high, input.scaling.scaled.low, input.scaling.scaled.high, true);
                                                            input.value = new scaling.module().scaleAnalog(parseInt(event.dataIn[input.key]), input.scaling.raw.low, input.scaling.raw.high, input.scaling.scaled.low, input.scaling.scaled.high, true);
                                                            break;
                                                        default:
                                                            tmp.value = parseInt(event.dataIn[input.key]);
                                                            input.value = parseInt(event.dataIn[input.key]);
                                                            break;
                                                    };
                                                }else{
                                                    console.log('here')
                                                }
                                                data.push(tmp);
                                                deferred.resolve(data)
                                            }else{
                                                deferred.resolve()
                                            }

                                            return deferred.promise
    
                                        })

                                    }, Promise.resolve())
                                    .then(async(data)=>{
                                        if (data) {
                                            __socket.send('devices:data', {
                                                data: data,
                                                deviceId: device.deviceId
                                            });
                                            await __router.mapping(event.rtuId, data);
                                        };
    
                                        deferred.resolve({})
                                    })
                
                                };

                                deferred.resolve()
                                return deferred.promise
                            })
                        }, Promise.resolve())
                            .then(async () => {
                                await portal.applyCOFS()
                                await portal.send()
                                deferred.resolve({})
                            })
                    } else {
                        deferred.resolve({})
                    }

                    return deferred.promise




                });

                __settings.devices.filter(o => o.enabled).map(o => {
                    switch (o.type) {
                        case ('modbus'):
                            var device = new Modbus(o);
                            // device.on('change', event => __router.route(device.deviceId, event));
                            device.on('change', event => __router.updateDeviceInputsThenActionMapping(device.deviceId, event));
                            __devices.push(device);
                            break;
                        case ('kGateway'):
                            var device = new KGATEWAY(o);
                            // device.on('change', event => __router.route(device.deviceId, event));
                            // __devices.push(device);
                            break;
                        case ('external'):
                            var device = new External(o);
                            __devices.push(device);
                            break;
                        case ('programmable-logic-controller'):
                            var device = new ProgrammableLogicController(o);
                            // device.on('change', event => __router.route(device.deviceId, event));
                            device.on('change', event => __router.updateDeviceInputsThenActionMapping(device.deviceId, event));
                            __devices.push(device);
                            break;
                        default:
                            __logger.warn('Device Type Not Found!')
                            break;
                    };
                });

                __router.on('connected', event => {
                    __settings.devices.filter(o => o.publish === true).map(async (device) => {
                        const pxtime = (device.pxtime ? device.pxtime : 120) * 1000;
                        __logger.info('Starting publish every ' + device.pxtime + ' seconds!');

                        await send(device.deviceId);

                        setInterval(async () => await send(device.deviceId), pxtime);
                        // setInterval(async () => await send(device.deviceId), 10000);
                    });
                });

                deferred.resolve();
            } catch (error) {
                deferred.reject(error);
            };

            return deferred.promise;
        },

        applyCOFS: async () => {
            var deferred = Q.defer()
            let index = 0
    
    
            // await __devices.map((promise,device)=>{
            //     return promise.then(()=>{
                    
            //     })
            // }, Promise.resolve())
    
            console.log('__routerStatus', JSON.stringify(__routerStatus))
            __devices.map(device => {
                index++
                if (device.enabled == true && device.publish == true) {
                    device.io.map(io => {
                        if (io.publish.enabled == true) {
                            let moduleFound = __routerStatus.find(o => o.moduleId == io.publish.moduleId)
                            if (!moduleFound) {
                                __routerStatus.push({ moduleId: __routerStatus.length, dataIn: { ...dataIn } })
                            }
                            if (io.publish.key == 'digitalsIn' && (parseFloat(io.publish.bit) != -1)) {
                                let digitalsIn = __routerStatus[io.publish.moduleId].dataIn[io.publish.key]
                                if (digitalsIn & Math.pow(2, io.publish.bit) > 0) {
                                    digitalsIn = digitalsIn - Math.pow(2, io.publish.bit)
                                }
                                if (io.value == 1) {
                                    digitalsIn = digitalsIn + Math.pow(2, io.publish.bit)
                                }
    
                                __routerStatus[io.publish.moduleId].dataIn[io.publish.key] = digitalsIn
                            } else {
                                __routerStatus[io.publish.moduleId].dataIn[io.publish.key] = io.value
                            }
                        }
                    })
                }
                if (__devices.length == index) {
                    deferred.resolve({})
                }
            })
    
            if (index == 0) {
                deferred.resolve({})
            }
    
            return deferred.promise
        },


        send: () => {
            __routerStatus.map(o => {
                __router.publish({
                    'rtuId': __settings.deviceId,
                    'dataIn': o.dataIn,
                    'barcode': __settings.barcode,
                    'rtuDate': new Date().getTime(),
                    'moduleId': o.moduleId
                });
            })
        }        

    };




    var send = () => {
        __routerStatus.map(o => {
            __router.publish({
                'rtuId': __settings.deviceId,
                'dataIn': o.dataIn,
                'barcode': __settings.barcode,
                'rtuDate': new Date().getTime(),
                'moduleId': o.moduleId
            });
        })
    }



    var sendOLD = (deviceId) => {
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

                const modules = device.io.filter(input => input.publish?.enabled).map(input => input.publish.moduleId).filter(value => (typeof (value) != 'undefined' && value != null)).filter((value, index, self) => self.indexOf(value) === index);

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
                        'digitalsIn': device.io.filter(o => o.publish?.enabled && o.value == 1 && o.key == 'digitalsIn' && o.moduleId == moduleId).map(o => Math.pow(2, o.bit)).reduce((a, b) => a + b, 0)
                    };

                    let a = device.io.filter(o => o.publish?.enabled && o.publish.key == 'digitalsIn' && o.moduleId == moduleId && o.publish.bit == -1)
                    if (a.length > 0) {
                        dataIn.digitalsIn = a[0].value
                    }

                    device.io.map(input => {
                        if (input.publish?.enabled && input.moduleId == moduleId) {
                            if (dataIn.hasOwnProperty(input.publish.key) && input.publish.key != 'digitalsIn') {
                                dataIn[input.publish.key] = input.value;
                            };
                        };
                    });

                    __logger.info('Publishing Data To Server: ' + device.deviceId);

                    console.log('shane', dataIn.digitalsIn)
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
