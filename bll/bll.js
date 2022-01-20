const ObjectId = require('../lib/object-id');
const SaveConfig = require('../lib/save-config');
const ErrorResponse = require('../lib/error-response');

var module = function () {
    return {
        config: {
            import: async (req, res) => {
                var args = {
                    req: req,
                    res: res
                };

                try {
                    __settings = args.req.body;
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

                try {
                    var found = false;
                    __settings.devices.map(device => {
                        if (device.deviceId == args.req.body.deviceId) {
                            found = true;
                        };
                    });
                    if (!found) {
                        __settings.devices.push({
                            io: args.req.body.io,
                            ip: args.req.body.ip,
                            port: args.req.body.port,
                            type: args.req.body.type,
                            txtime: args.req.body.txtime,
                            barcode: args.req.body.barcode,
                            publish: args.req.body.publish,
                            enabled: args.req.body.enabled,
                            deviceId: args.req.body.deviceId,
                            description: args.req.body.description
                        });
                        __settings.devices = __settings.devices.map(o => {
                            return {
                                io: o.io,
                                ip: o.ip,
                                port: o.port,
                                type: o.type,
                                txtime: o.txtime,
                                barcode: o.barcode,
                                publish: o.publish,
                                enabled: o.enabled,
                                deviceId: o.deviceId,
                                description: o.description
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
                            args.result = {
                                _id: args.req.body.deviceId
                            };
                            __responder.success(req, res, args.result);
                        };
                    } else {
                        var err = new ErrorResponse();
                        err.error.errors[0].code = 70;
                        err.error.errors[0].reason = 'Device already exists!';
                        err.error.errors[0].message = 'Device already exists!';
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
                        if (__settings.devices[i].deviceId == args.req.body.deviceId) {
                            args.result = __settings.devices[i];
                            break;
                        };
                    };
                    for (let i = 0; i < __devices.length; i++) {
                        if (__devices[i].deviceId == args.req.body.deviceId) {
                            for (let b = 0; b < __devices[i].io.length; b++) {
                                args.result.io.map(input => {
                                    if (input.inputId == __devices[i].values[b].inputId) {
                                        input.value = __devices[i].values[b].value;
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

                try {
                    args.result = {
                        n: 0
                    };
                    for (let i = 0; i < __settings.devices.length; i++) {
                        if (__settings.devices[i].deviceId == args.req.body.deviceId) {
                            Object.keys(args.req.body).map(key => {
                                if (__settings.devices[i].hasOwnProperty(key)) {
                                    __settings.devices[i][key] = args.req.body[key];
                                    args.result.n++;
                                };
                            });
                            break;
                        };
                    };
                    __settings.devices = __settings.devices.map(o => {
                        return {
                            io: o.io,
                            ip: o.ip,
                            port: o.port,
                            type: o.type,
                            txtime: o.txtime,
                            pxtime: o.pxtime,
                            barcode: o.barcode,
                            publish: o.publish,
                            enabled: o.enabled,
                            deviceId: o.deviceId,
                            description: o.description
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
                    for (let i = 0; i < __settings.devices.length; i++) {
                        if (__settings.devices[i].deviceId == args.req.body.deviceId) {
                            __settings.devices.splice(i, 1);
                            args.result.n++;
                            break;
                        };
                    };
                    __settings.devices = __settings.devices.map(o => {
                        return {
                            io: o.io,
                            ip: o.ip,
                            port: o.port,
                            type: o.type,
                            txtime: o.txtime,
                            barcode: o.barcode,
                            publish: o.publish,
                            enabled: o.enabled,
                            deviceId: o.deviceId,
                            description: o.description
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