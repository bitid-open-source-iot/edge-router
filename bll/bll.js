const ObjectId = require('../lib/object-id');
const SaveConfig = require('../lib/save-config');
const ErrorResponse = require('../lib/error-response');
const { exec } = require('child_process');
const Q = require('q')

var module = function () {
    return {
        settings: {

            command: async (req, res) => {
                var args = {
                    req: req,
                    res: res
                };

                try {


                    function myExec() {
                        var deferred = Q.defer()

                        // exec(`echo '${args.req.body.password}' | sudo -S ${args.req.body.command}`, (error, stdout, stderr) => {
                        exec(`${args.req.body.command}`, (error, stdout, stderr) => {
                            if (error) {
                                console.error(`exec error: ${error}`);
                                deferred.reject(error)
                            }
                            console.log(`stdout: ${stdout}`);
                            console.error(`stderr: ${stderr}`);
                            deferred.resolve(stdout)
                        });

                        return deferred.promise
                    }

                    let response = await myExec()

                    args.result = [{
                        commandResponse: response
                    }]
                    if (args.result.length > 0) {
                        __responder.success(req, res, args.result);
                    } else {
                        var err = new ErrorResponse();
                        err.error.errors[0].code = 69;
                        err.error.errors[0].reason = 'Command error!';
                        err.error.errors[0].message = 'Command error!';
                        __responder.error(req, res, err);
                    };
                } catch (error) {
                    var err = new ErrorResponse();
                    err.error.errors[0].code = 503;
                    err.error.errors[0].reason = error.message;
                    err.error.errors[0].message = 'Command error!!';
                    __responder.error(req, res, err);
                };
            },

            list: async (req, res) => {
                var args = {
                    req: req,
                    res: res
                };

                try {
                    args.result = [{
                        commsOption: __settings.commsOption || "0",
                        overideDeviceBarcode: __settings.overideDeviceBarcode || "true",
                        barcode: __settings.barcode,
                        deviceId: __settings.deviceId,
                        id: __settings.id,
                        apn: __settings.apn,
                        txtime: __settings.txtime,
                        publishEnabled: __settings.publishEnabled,
                        host: __settings.server.host,
                        port: __settings.server.port,
                        tcpClientHost: __settings?.tcpClient?.host,
                        tcpClientPort: __settings?.tcpClient?.port,
                        username: __settings.server.username,
                        password: __settings.server.password,
                        dataTopic: __settings.server.subscribe.data,
                        controlTopic: __settings.server.subscribe.control,
                        rateLimitTmrSP: __settings.rateLimits.rateLimitTmrSP,
                        rateLimitTxCountSP: __settings.rateLimits.rateLimitTxCountSP
                    }]
                    if (args.result.length > 0) {
                        __responder.success(req, res, args.result);
                    } else {
                        var err = new ErrorResponse();
                        err.error.errors[0].code = 69;
                        err.error.errors[0].reason = 'Settings not found!';
                        err.error.errors[0].message = 'Settings not found!';
                        __responder.error(req, res, err);
                    };
                } catch (error) {
                    var err = new ErrorResponse();
                    err.error.errors[0].code = 503;
                    err.error.errors[0].reason = error.message;
                    err.error.errors[0].message = 'Issue listing Settings!';
                    __responder.error(req, res, err);
                };
            },

            update: async (req, res) => {
                var args = {
                    req: req,
                    res: res
                };

                try {
                    args.result = {
                        n: 0
                    };
                    __settings.commsOption = args.req.body.commsOption || '0'
                    __settings.overideDeviceBarcode = args.req.body.overideDeviceBarcode || 'true'
                    __settings.barcode = args.req.body.barcode || '0'
                    __settings.deviceId = args.req.body.deviceId || '0'
                    __settings.id = args.req.body.id
                    __settings.apn = args.req.body.apn || ''
                    __settings.txtime = args.req.body.txtime || 900
                    __settings.publishEnabled = args.req.body.publishEnabled
                    __settings.server.host = args.req.body.host || ''
                    __settings.server.port = args.req.body.port || 1888

                    if(!__settings.tcpClient){
                        __settings.tcpClient = {
                            host: '',
                            port: 0
                        }    
                    }
                    __settings.tcpClient.host = args.req.body.tcpClientHost || ''
                    __settings.tcpClient.port = args.req.body.tcpClientPort || 0

                    __settings.server.username = args.req.body.username || ''
                    __settings.server.password = args.req.body.password || ''
                    __settings.server.subscribe.data = args.req.body.dataTopic || ''
                    __settings.server.subscribe.control = args.req.body.controlTopic || ''
                    __settings.rateLimits.rateLimitTmrSP = args.req.body.rateLimitTmrSP || 60
                    __settings.rateLimits.rateLimitTxCountSP = args.req.body.rateLimitTxCountSP || 4

                    args.result.n++
                    if (args.result.n > 0) {
                        const saved = await SaveConfig(__settings);
                        if (!saved) {
                            var err = new ErrorResponse();
                            err.error.errors[0].code = 503;
                            err.error.errors[0].reason = error.message;
                            err.error.errors[0].message = 'Issue loading devices!';
                            __responder.error(req, res, err);
                        } else {
                            __responder.success(req, res, args.result);
                        };
                    } else {
                        var err = new ErrorResponse();
                        err.error.errors[0].code = 69;
                        err.error.errors[0].reason = 'No fields were updated!';
                        err.error.errors[0].message = 'No fields were updated!';
                        __responder.error(req, res, err);
                    };
                } catch (error) {
                    var err = new ErrorResponse();
                    err.error.errors[0].code = 503;
                    err.error.errors[0].reason = error.message;
                    err.error.errors[0].message = 'Issue updating device!';
                    __responder.error(req, res, err);
                };
            },

        },

        config: {
            import: async (req, res) => {
                var args = {
                    req: req,
                    res: res
                };

                try {
                    delete args.req.body.header;
                    __settings = args.req.body;
                    for (let i = 0; i < __settings.devices.length; i++) {
                        const device = __settings.devices[i];
                        if(!device.id) {
                            device.id = i;
                        }
                        
                    }
                    const saved = await SaveConfig(__settings);
                    if (!saved) {
                        var err = new ErrorResponse();
                        err.error.errors[0].code = 503;
                        err.error.errors[0].reason = error.message;
                        err.error.errors[0].message = 'Issue loading devices!';
                        __responder.error(req, res, err);
                    } else {
                        args.result = {
                            n: 1
                        };
                        __responder.success(req, res, args.result);
                    };
                } catch (error) {
                    var err = new ErrorResponse();
                    err.error.errors[0].code = 503;
                    err.error.errors[0].reason = error.message;
                    err.error.errors[0].message = 'Issue loading devices!';
                    __responder.error(req, res, err);
                };
            },

            export: async (req, res) => {
                var args = {
                    req: req,
                    res: res
                };

                try {
                    __responder.success(req, res, __settings);
                } catch (error) {
                    var err = new ErrorResponse();
                    err.error.errors[0].code = 503;
                    err.error.errors[0].reason = error.message;
                    err.error.errors[0].message = 'Issue exporting config!';
                    __responder.error(req, res, err);
                };
            }
        },

        admin: {
            change: {
                email: async (req, res) => {
                    var args = {
                        req: req,
                        res: res
                    };

                    try {
                        __settings.admin.email = args.req.body.email;
                        const saved = await SaveConfig(__settings);
                        if (!saved) {
                            var err = new ErrorResponse();
                            err.error.errors[0].code = 503;
                            err.error.errors[0].reason = error.message;
                            err.error.errors[0].message = 'Issue loading devices!';
                            __responder.error(req, res, err);
                        } else {
                            args.result = {
                                n: 1
                            };
                            __responder.success(req, res, args.result);
                        };
                    } catch (error) {
                        var err = new ErrorResponse();
                        err.error.errors[0].code = 503;
                        err.error.errors[0].reason = error.message;
                        err.error.errors[0].message = 'Issue loading devices!';
                        __responder.error(req, res, err);
                    };
                },

                password: async (req, res) => {
                    var args = {
                        req: req,
                        res: res
                    };

                    try {
                        if (args.req.body.confirm == args.req.body.password) {
                            __settings.admin.password = args.req.body.password;
                            const saved = await SaveConfig(__settings);
                            if (!saved) {
                                var err = new ErrorResponse();
                                err.error.errors[0].code = 503;
                                err.error.errors[0].reason = error.message;
                                err.error.errors[0].message = 'Issue loading devices!';
                                __responder.error(req, res, err);
                            } else {
                                args.result = {
                                    n: 1
                                };
                                __responder.success(req, res, args.result);
                            };
                        } else {
                            var err = new ErrorResponse();
                            err.error.errors[0].code = 401;
                            err.error.errors[0].reason = 'Passwords do not match!';
                            err.error.errors[0].message = 'Passwords do not match!';
                            __responder.error(req, res, err);
                        };
                    } catch (error) {
                        var err = new ErrorResponse();
                        err.error.errors[0].code = 503;
                        err.error.errors[0].reason = error.message;
                        err.error.errors[0].message = 'Issue changing password!';
                        __responder.error(req, res, err);
                    };
                }
            },

            authenticate: async (req, res) => {
                var args = {
                    req: req,
                    res: res
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
                        __responder.success(req, res, authenticated);
                    } else {
                        throw 'Invalid payload header!';
                    };
                } catch (error) {
                    var err = new ErrorResponse();
                    err.error.errors[0].code = 503;
                    err.error.errors[0].reason = error.message;
                    err.error.errors[0].message = 'Issue updating device!';
                    __responder.error(req, res, err);
                };
            }
        },

        devices: {

            add: async (req, res) => {
                var args = {
                    req: req,
                    res: res
                };






                async function reorderIds(){
                    var deferred = Q.defer()
    
                    let newId = 0;
                    __settings.devices.map(device => {
                        newId++
                        device.id = newId;
                    });
                    __settings.devices = __settings.devices.map(o => {
                        return {
                            id: o.id,
                            io: o.io,
                            ip: o.ip,
                            port: o.port,
                            softwarePort: o.softwarePort,
                            type: o.type,
                            txtime: o.txtime,
                            pxtime: o.pxtime,
                            timeout: o.timeout,
                            barcode: o.barcode,
                            publish: o.publish,
                            enabled: o.enabled,
                            unitId: o.unitId,
                            deviceId: o.deviceId,
                            description: o.description,
                            userName: o.userName,
                            password: o.password,
                        };
                    });
                    const saved = await SaveConfig(__settings);
                    if (!saved) {
                        var err = new ErrorResponse();
                        err.error.errors[0].code = 503;
                        err.error.errors[0].reason = error.message;
                        err.error.errors[0].message = 'Issue loading devices!';
                        deferred.reject(err)
                    } else {
                        deferred.resolve(__settings.devices.length-1)
                    };
    
    
                    return deferred.promise
                }







                try {
                    var found = false;
                    let newId = 0;
                    __settings.devices.map(device => {
                        newId++
                        if (device.description == args.req.body.description || device.deviceId == args.req.body.deviceId) {
                            found = true;
                        };
                    });
                    if (!found) {
                        __settings.devices.push({
                            id: newId,
                            io: args.req.body.io,
                            ip: args.req.body.ip,
                            port: args.req.body.port,
                            softwarePort: args.req.body.softwarePort,
                            type: args.req.body.type,
                            txtime: args.req.body.txtime,
                            pxtime: args.req.body.pxtime,
                            timeout: args.req.body.timeout,
                            barcode: args.req.body.barcode,
                            publish: args.req.body.publish,
                            enabled: args.req.body.enabled,
                            unitId: args.req.body.unitId,
                            deviceId: args.req.body.deviceId,
                            description: args.req.body.description,
                            userName: args.req.body.userName,
                            password: args.req.body.password,
                        });
                        __settings.devices = __settings.devices.map(o => {
                            return {
                                id: o.id,
                                io: o.io,
                                ip: o.ip,
                                port: o.port,
                                softwarePort: o.softwarePort,
                                type: o.type,
                                txtime: o.txtime,
                                pxtime: o.pxtime,
                                timeout: o.timeout,
                                barcode: o.barcode,
                                publish: o.publish,
                                enabled: o.enabled,
                                unitId: o.unitId,
                                deviceId: o.deviceId,
                                description: o.description,
                                userName: o.userName,
                                password: o.password,
                            };
                        });
                        const saved = await SaveConfig(__settings);
                        if (!saved) {
                            var err = new ErrorResponse();
                            err.error.errors[0].code = 503;
                            err.error.errors[0].reason = error.message;
                            err.error.errors[0].message = 'Issue loading devices!';
                            __responder.error(req, res, err);
                        } else {
                            let response = await reorderIds()
                            args.result = {
                                _id: response
                            };
                            __responder.success(req, res, args.result);
                        };
                    } else {
                        var err = new ErrorResponse();
                        err.error.errors[0].code = 70;
                        err.error.errors[0].reason = 'Device with that description or deviceId already exists!';
                        err.error.errors[0].message = 'Device with that description or deviceId already exists!';
                        __responder.error(req, res, err);
                    };
                } catch (error) {
                    var err = new ErrorResponse();
                    err.error.errors[0].code = 503;
                    err.error.errors[0].reason = error.message;
                    err.error.errors[0].message = 'Issue loading devices!';
                    __responder.error(req, res, err);
                };
            },

            get: async (req, res) => {
                var args = {
                    req: req,
                    res: res
                };

                try {
                    for (let i = 0; i < __settings.devices.length; i++) {
                        if (__settings.devices[i].id == args.req.body.id) {
                            args.result = __settings.devices[i];
                            break;
                        };
                    };
                    for (let i = 0; i < __devices.length; i++) {
                        if (__devices[i].id == args.req.body.id) {
                            for (let b = 0; b < __devices[i]?.io.length; b++) {
                                args.result?.io.map(input => {
                                    if (input?.inputId == __devices[i]?.values[b]?.inputId) {
                                        input.value = __devices[i]?.values[b]?.value;
                                    };
                                });
                            };
                            break;
                        };
                    };
                    if (args.result) {
                        __responder.success(req, res, args.result);
                    } else {
                        var err = new ErrorResponse();
                        err.error.errors[0].code = 69;
                        err.error.errors[0].reason = 'Device not found!';
                        err.error.errors[0].message = 'Device not found!';
                        __responder.error(req, res, err);
                    };
                } catch (error) {
                    var err = new ErrorResponse();
                    err.error.errors[0].code = 503;
                    err.error.errors[0].reason = error.message;
                    err.error.errors[0].message = 'Issue loading devices!';
                    __responder.error(req, res, err);
                };
            },

            list: async (req, res) => {
                var args = {
                    req: req,
                    res: res
                };

                try {
                    args.result = __settings.devices;
                    if (args.result.length > 0) {
                        __responder.success(req, res, args.result);
                    } else {
                        var err = new ErrorResponse();
                        err.error.errors[0].code = 69;
                        err.error.errors[0].reason = 'Devices not found!';
                        err.error.errors[0].message = 'Devices not found!';
                        __responder.error(req, res, err);
                    };
                } catch (error) {
                    var err = new ErrorResponse();
                    err.error.errors[0].code = 503;
                    err.error.errors[0].reason = error.message;
                    err.error.errors[0].message = 'Issue loading devices!';
                    __responder.error(req, res, err);
                };
            },

            update: async (req, res) => {
                var args = {
                    req: req,
                    res: res
                };

                let deviceIdOld = '';
                let deviceIdNew = '';


                try {
                    args.result = {
                        n: 0
                    };
                    for (let i = 0; i < __settings.devices.length; i++) {
                        if (__settings.devices[i].id == args.req.body.id) {
                            Object.keys(args.req.body).map(key => {
                                if (__settings.devices[i].hasOwnProperty(key)) {
                                    if (key == 'deviceId') {
                                        if (__settings.devices[i][key] != args.req.body[key]) {
                                            deviceIdOld = __settings.devices[i][key];
                                            deviceIdNew = args.req.body[key];
                                        };
                                    };
                                    __settings.devices[i][key] = args.req.body[key];
                                    args.result.n++;
                                };
                            });
                            break;
                        };
                    };
                    __settings.devices = __settings.devices.map(o => {
                        return {
                            id: o.id,
                            io: o.io,
                            ip: o.ip,
                            port: o.port,
                            softwarePort: o.softwarePort,
                            type: o.type,
                            txtime: o.txtime,
                            pxtime: o.pxtime,
                            timeout: o.timeout,
                            barcode: o.barcode,
                            publish: o.publish,
                            enabled: o.enabled,
                            unitId: o.unitId,
                            deviceId: o.deviceId,
                            description: o.description,
                            userName: o.userName,
                            password: o.password,
                        };
                    });
                    if (args.result.n > 0) {

                        if (deviceIdOld != '') {
                            __settings.mapping.map(map => {
                                if(map.source.deviceId == deviceIdOld){
                                    map.source.deviceId = deviceIdNew
                                }
                                if(map.destination.deviceId == deviceIdOld){
                                    map.destination.deviceId = deviceIdNew
                                }
                            })
                        }

                        const saved = await SaveConfig(__settings);
                        if (!saved) {
                            var err = new ErrorResponse();
                            err.error.errors[0].code = 503;
                            err.error.errors[0].reason = error.message;
                            err.error.errors[0].message = 'Issue loading devices!';
                            __responder.error(req, res, err);
                        } else {
                            __responder.success(req, res, args.result);
                        };
                    } else {
                        var err = new ErrorResponse();
                        err.error.errors[0].code = 69;
                        err.error.errors[0].reason = 'No fields were updated!';
                        err.error.errors[0].message = 'No fields were updated!';
                        __responder.error(req, res, err);
                    };
                } catch (error) {
                    var err = new ErrorResponse();
                    err.error.errors[0].code = 503;
                    err.error.errors[0].reason = error.message;
                    err.error.errors[0].message = 'Issue updating device!';
                    __responder.error(req, res, err);
                };
            },

            delete: async (req, res) => {
                var args = {
                    req: req,
                    res: res
                };



                async function reorderIds(){
                    var deferred = Q.defer()
    
                    let newId = 0;
                    __settings.devices.map(device => {
                        newId++
                        device.id = newId;
                    });
                    __settings.devices = __settings.devices.map(o => {
                        return {
                            id: o.id,
                            io: o.io,
                            ip: o.ip,
                            port: o.port,
                            softwarePort: o.softwarePort,
                            type: o.type,
                            txtime: o.txtime,
                            pxtime: o.pxtime,
                            timeout: o.timeout,
                            barcode: o.barcode,
                            publish: o.publish,
                            enabled: o.enabled,
                            unitId: o.unitId,
                            deviceId: o.deviceId,
                            description: o.description,
                            userName: o.userName,
                            password: o.password,
                        };
                    });
                    const saved = await SaveConfig(__settings);
                    if (!saved) {
                        var err = new ErrorResponse();
                        err.error.errors[0].code = 503;
                        err.error.errors[0].reason = error.message;
                        err.error.errors[0].message = 'Issue loading devices!';
                        deferred.reject(err)
                    } else {
                        deferred.resolve(__settings.devices.length-1)
                    };
    
    
                    return deferred.promise
                }





                try {
                    args.result = {
                        n: 0
                    };
                    for (let i = 0; i < __settings.devices.length; i++) {
                        if (__settings.devices[i].id == args.req.body.id) {
                            __settings.devices.splice(i, 1);
                            args.result.n++;
                            break;
                        };
                    };
                    __settings.devices = __settings.devices.map(o => {
                        return {
                            id: o.id,
                            io: o.io,
                            ip: o.ip,
                            port: o.port,
                            type: o.type,
                            txtime: o.txtime,
                            pxtime: o.pxtime,
                            timeout: o.timeout,
                            barcode: o.barcode,
                            publish: o.publish,
                            enabled: o.enabled,
                            unitId: o.unitId,
                            deviceId: o.deviceId,
                            description: o.description,
                            userName: o.userName,
                            password: o.password,
                        };
                    });
                    if (args.result.n > 0) {
                        const saved = await SaveConfig(__settings);
                        if (!saved) {
                            var err = new ErrorResponse();
                            err.error.errors[0].code = 503;
                            err.error.errors[0].reason = error.message;
                            err.error.errors[0].message = 'Issue loading devices!';
                            __responder.error(req, res, err);
                        } else {
                            await reorderIds()
                            __responder.success(req, res, args.result);
                        };
                    } else {
                        var err = new ErrorResponse();
                        err.error.errors[0].code = 69;
                        err.error.errors[0].reason = 'No fields were updated!';
                        err.error.errors[0].message = 'No fields were updated!';
                        __responder.error(req, res, err);
                    };
                } catch (error) {
                    var err = new ErrorResponse();
                    err.error.errors[0].code = 503;
                    err.error.errors[0].reason = error.message;
                    err.error.errors[0].message = 'Issue updating device!';
                    __responder.error(req, res, err);
                };
            }
        },

        mapping: {
            add: async (req, res) => {
                var args = {
                    req: req,
                    res: res
                };

                try {
                    var map = {
                        mapId: ObjectId(),
                        source: args.req.body.source,
                        destination: args.req.body.destination
                    };
                    __settings.mapping.push(map);
                    const saved = await SaveConfig(__settings);
                    if (!saved) {
                        var err = new ErrorResponse();
                        err.error.errors[0].code = 503;
                        err.error.errors[0].reason = error.message;
                        err.error.errors[0].message = 'Issue loading mapping!';
                        __responder.error(req, res, err);
                    } else {
                        args.result = {
                            _id: map.mapId
                        };
                        __responder.success(req, res, args.result);
                    };
                } catch (error) {
                    var err = new ErrorResponse();
                    err.error.errors[0].code = 503;
                    err.error.errors[0].reason = error.message;
                    err.error.errors[0].message = 'Issue loading mapping!';
                    __responder.error(req, res, err);
                };
            },

            get: async (req, res) => {
                var args = {
                    req: req,
                    res: res
                };

                try {
                    for (let i = 0; i < __settings.mapping.length; i++) {
                        if (__settings.mapping[i].mapId == args.req.body.mapId) {
                            args.result = __settings.mapping[i];
                            break;
                        };
                    };
                    if (args.result) {
                        __responder.success(req, res, args.result);
                    } else {
                        var err = new ErrorResponse();
                        err.error.errors[0].code = 69;
                        err.error.errors[0].reason = 'Map not found!';
                        err.error.errors[0].message = 'Map not found!';
                        __responder.error(req, res, err);
                    };
                } catch (error) {
                    var err = new ErrorResponse();
                    err.error.errors[0].code = 503;
                    err.error.errors[0].reason = error.message;
                    err.error.errors[0].message = 'Issue loading mapping!';
                    __responder.error(req, res, err);
                };
            },

            list: async (req, res) => {
                var args = {
                    req: req,
                    res: res
                };

                try {
                    args.result = __settings.mapping;
                    if (args.result.length > 0) {
                        __responder.success(req, res, args.result);
                    } else {
                        var err = new ErrorResponse();
                        err.error.errors[0].code = 69;
                        err.error.errors[0].reason = 'Mapping not found!';
                        err.error.errors[0].message = 'Mapping not found!';
                        __responder.error(req, res, err);
                    };
                } catch (error) {
                    var err = new ErrorResponse();
                    err.error.errors[0].code = 503;
                    err.error.errors[0].reason = error.message;
                    err.error.errors[0].message = 'Issue loading mapping!';
                    __responder.error(req, res, err);
                };
            },

            update: async (req, res) => {
                var args = {
                    req: req,
                    res: res
                };

                try {
                    args.result = {
                        n: 0
                    };
                    for (let i = 0; i < __settings.mapping.length; i++) {
                        if (__settings.mapping[i].mapId == args.req.body.mapId) {
                            Object.keys(args.req.body).map(key => {
                                if (__settings.mapping[i].hasOwnProperty(key)) {
                                    __settings.mapping[i][key] = args.req.body[key];
                                    args.result.n++;
                                };
                            });
                            break;
                        };
                    };
                    if (args.result.n > 0) {
                        const saved = await SaveConfig(__settings);
                        if (!saved) {
                            var err = new ErrorResponse();
                            err.error.errors[0].code = 503;
                            err.error.errors[0].reason = error.message;
                            err.error.errors[0].message = 'Issue loading mapping!';
                            __responder.error(req, res, err);
                        } else {
                            __responder.success(req, res, args.result);
                        };
                    } else {
                        var err = new ErrorResponse();
                        err.error.errors[0].code = 69;
                        err.error.errors[0].reason = 'No fields were updated!';
                        err.error.errors[0].message = 'No fields were updated!';
                        __responder.error(req, res, err);
                    };
                } catch (error) {
                    var err = new ErrorResponse();
                    err.error.errors[0].code = 503;
                    err.error.errors[0].reason = error.message;
                    err.error.errors[0].message = 'Issue updating device!';
                    __responder.error(req, res, err);
                };
            },

            delete: async (req, res) => {
                var args = {
                    req: req,
                    res: res
                };

                try {
                    args.result = {
                        n: 0
                    };
                    for (let i = 0; i < __settings.mapping.length; i++) {
                        if (__settings.mapping[i].mapId == args.req.body.mapId) {
                            __settings.mapping.splice(i, 1);
                            args.result.n++;
                            break;
                        };
                    };
                    if (args.result.n > 0) {
                        const saved = await SaveConfig(__settings);
                        if (!saved) {
                            var err = new ErrorResponse();
                            err.error.errors[0].code = 503;
                            err.error.errors[0].reason = error.message;
                            err.error.errors[0].message = 'Issue loading mapping!';
                            __responder.error(req, res, err);
                        } else {
                            __responder.success(req, res, args.result);
                        };
                    } else {
                        var err = new ErrorResponse();
                        err.error.errors[0].code = 69;
                        err.error.errors[0].reason = 'No fields were updated!';
                        err.error.errors[0].message = 'No fields were updated!';
                        __responder.error(req, res, err);
                    };
                } catch (error) {
                    var err = new ErrorResponse();
                    err.error.errors[0].code = 503;
                    err.error.errors[0].reason = error.message;
                    err.error.errors[0].message = 'Issue updating device!';
                    __responder.error(req, res, err);
                };
            }
        }
    };
};

exports.module = module;