const Q = require('q');
const chai = require('chai');
const fetch = require('node-fetch');
const expect = require('chai').expect;
const should = require('chai').should();
const config = require('./config.json');
const subset = require('chai-subset');

chai.use(subset);

var mapId = null;
var deviceId = null;
var email = config.email;
var password = config.password;
var authenticated = config.authenticated;

describe('Admin', function () {
    it('/edge-router/admin/authenticate', function (done) {
        this.timeout(5000);

        tools.api.admin.authenticate()
            .then((result) => {
                try {
                    result.should.have.property('authenticated')
                    done();
                } catch (e) {
                    done(e);
                };
            }, (err) => {
                try {
                    done(err);
                } catch (e) {
                    done(e);
                };
            });
    });

    it('/edge-router/admin/change-email', function (done) {
        this.timeout(5000);

        tools.api.admin.changeemail(config.email, 'aaa@xxx.co.za')
            .then((result) => {
                try {
                    result.should.have.property('updated');
                    expect(result.updated).is.above(0)
                    done();
                } catch (e) {
                    done(e);
                };
            }, (err) => {
                try {
                    done(err);
                } catch (e) {
                    done(e);
                };
            });
    });

    it('/edge-router/admin/change-email', function (done) {
        this.timeout(5000);

        tools.api.admin.changeemail('aaa@xxx.co.za', email)
            .then((result) => {
                try {
                    config.email = email;
                    result.should.have.property('updated');
                    expect(result.updated).is.above(0);
                    done();
                } catch (e) {
                    done(e);
                };
            }, (err) => {
                try {
                    done(err);
                } catch (e) {
                    done(e);
                };
            });
    });

    it('/edge-router/admin/change-password', function (done) {
        this.timeout(5000);

        tools.api.admin.changepassword(config.password, 'password')
            .then((result) => {
                try {
                    result.should.have.property('updated');
                    expect(result.updated).is.above(0);
                    done();
                } catch (e) {
                    done(e);
                };
            }, (err) => {
                try {
                    done(err);
                } catch (e) {
                    done(e);
                };
            });
    });

    it('/edge-router/admin/change-password', function (done) {
        this.timeout(5000);

        tools.api.admin.changepassword('password', password)
            .then((result) => {
                try {
                    config.password = password;
                    result.should.have.property('updated');
                    expect(result.updated).is.above(0);
                    done();
                } catch (e) {
                    done(e);
                };
            }, (err) => {
                try {
                    done(err);
                } catch (e) {
                    done(e);
                };
            });
    });
});

describe('Config', function () {
    it('/edge-router/config/get', function (done) {
        this.timeout(5000);

        tools.api.config.get()
            .then((result) => {
                try {
                    result.should.have.property('icon');
                    result.should.have.property('name');
                    result.should.have.property('appId');
                    result.should.have.property('theme');
                    result.should.have.property('favicon');
                    done();
                } catch (e) {
                    done(e);
                };
            }, (err) => {
                try {
                    done(err);
                } catch (e) {
                    done(e);
                };
            });
    });

    // it('/edge-router/config/import', function (done) {
    //     this.timeout(5000);

    //     tools.api.config.import()
    //         .then((result) => {
    //             try {
    //                 result.should.have.property('');
    //                 done();
    //             } catch (e) {
    //                 done(e);
    //             };
    //         }, (err) => {
    //             try {
    //                 done(err);
    //             } catch (e) {
    //                 done(e);
    //             };
    //         });
    // });

    // it('/edge-router/config/export', function (done) {
    //     this.timeout(5000);

    //     tools.api.config.export()
    //         .then((result) => {
    //             try {
    //                 result.should.have.property('');
    //                 done();
    //             } catch (e) {
    //                 done(e);
    //             };
    //         }, (err) => {
    //             try {
    //                 done(err);
    //             } catch (e) {
    //                 done(e);
    //             };
    //         });
    // });
});

describe('Devices', function () {
    it('/edge-router/devices/add', function (done) {
        this.timeout(5000);

        tools.api.devices.add()
            .then((result) => {
                try {
                    deviceId = result.deviceId
                    result.should.have.property('deviceId');
                    done();
                } catch (e) {
                    done(e);
                };
            }, (err) => {
                try {
                    done(err);
                } catch (e) {
                    done(e);
                };
            });
    });

    it('/edge-router/devices/get', function (done) {
        this.timeout(5000);

        tools.api.devices.get()
            .then((result) => {
                try {
                    deviceId = result.deviceId
                    result.should.have.property('io');
                    result.should.have.property('ip');
                    result.should.have.property('port');
                    result.should.have.property('type');
                    result.should.have.property('pxtime');
                    result.should.have.property('txtime');
                    result.should.have.property('barcode');
                    result.should.have.property('publish');
                    result.should.have.property('timeout');
                    result.should.have.property('enabled');
                    result.should.have.property('deviceId');
                    result.should.have.property('description');
                    done();
                } catch (e) {
                    done(e);
                };
            }, (err) => {
                try {
                    done(err);
                } catch (e) {
                    done(e);
                };
            });
    });

    it('/edge-router/devices/list', function (done) {
        this.timeout(5000);

        tools.api.devices.list()
            .then((result) => {
                try {
                    result[0].should.have.property('io');
                    result[0].should.have.property('ip');
                    result[0].should.have.property('port');
                    result[0].should.have.property('type');
                    result[0].should.have.property('pxtime');
                    result[0].should.have.property('txtime');
                    result[0].should.have.property('barcode');
                    result[0].should.have.property('publish');
                    result[0].should.have.property('timeout');
                    result[0].should.have.property('enabled');
                    result[0].should.have.property('deviceId');
                    result[0].should.have.property('description');
                    done();
                } catch (e) {
                    done(e);
                };
            }, (err) => {
                try {
                    done(err);
                } catch (e) {
                    done(e);
                };
            });
    });

    it('/edge-router/devices/update', function (done) {
        this.timeout(5000);

        tools.api.devices.update()
            .then((result) => {
                try {
                    result.should.have.property('update');
                    expect(result.updated).to.be.above(0);
                    done();
                } catch (e) {
                    done(e);
                };
            }, (err) => {
                try {
                    done(err);
                } catch (e) {
                    done(e);
                };
            });
    });
});

describe('Mapping', function () {
    it('/edge-router/mapping/add', function (done) {
        this.timeout(5000);

        tools.api.devices.add()
            .then((result) => {
                try {
                    mapId = result.mapId;
                    result.should.have.property('mapId');
                    done();
                } catch (e) {
                    done(e);
                };
            }, (err) => {
                try {
                    done(err);
                } catch (e) {
                    done(e);
                };
            });
    });

    it('/edge-router/mapping/get', function (done) {
        this.timeout(5000);

        tools.api.mapping.get()
            .then((result) => {
                try {
                    result.should.have.property('mapId');
                    result.should.have.property('source');
                    result.should.have.property('destination');
                    done();
                } catch (e) {
                    done(e);
                };
            }, (err) => {
                try {
                    done(err);
                } catch (e) {
                    done(e);
                };
            });
    });

    it('/edge-router/mapping/list', function (done) {
        this.timeout(5000);

        tools.api.mapping.list()
            .then((result) => {
                try {
                    result[0].should.have.property('mapId');
                    result[0].should.have.property('source');
                    result[0].should.have.property('destination');
                    done();
                } catch (e) {
                    done(e);
                };
            }, (err) => {
                try {
                    done(err);
                } catch (e) {
                    done(e);
                };
            });
    });

    it('/edge-router/mapping/update', function (done) {
        this.timeout(5000);

        tools.api.mapping.update()
            .then((result) => {
                try {
                    result.should.have.property('updated');
                    expect(result.updated).to.be.above(0);
                    done();
                } catch (e) {
                    done(e);
                };
            }, (err) => {
                try {
                    done(err);
                } catch (e) {
                    done(e);
                };
            });
    });
});

describe('Remove Added Items', function () {
    it('/edge-router/devices/delete', function (done) {
        this.timeout(5000);

        tools.api.devices.delete()
            .then((result) => {
                try {
                    result.should.have.property('deleted');
                    expect(result.deleted).to.equal(1);
                    done();
                } catch (e) {
                    done(e);
                };
            }, (err) => {
                try {
                    done(err);
                } catch (e) {
                    done(e);
                };
            });
    });

    it('/edge-router/mapping/delete', function (done) {
        this.timeout(5000);

        tools.api.mapping.delete()
            .then((result) => {
                try {
                    result.should.have.property('deleted');
                    expect(result.deleted).to.equal(1);
                    done();
                } catch (e) {
                    done(e);
                };
            }, (err) => {
                try {
                    done(err);
                } catch (e) {
                    done(e);
                };
            });
    });

    // it('/edge-router/route/delete', function (done) {
    //     this.timeout(5000);

    //     tools.api.route.delete()
    //         .then((result) => {
    //             try {
    //                 result.should.have.property('deleted');
    //                 expect(result.deleted).to.equal(1);
    //                 done();
    //             } catch (e) {
    //                 done(e);
    //             };
    //         }, (err) => {
    //             try {
    //                 done(err);
    //             } catch (e) {
    //                 done(e);
    //             };
    //         });
    // });
});

describe('Health Check', function () {
    it('/', function (done) {
        this.timeout(5000);

        tools.api.healthcheck()
            .then((result) => {
                try {
                    result.should.have.property('uptime');
                    result.should.have.property('memory');
                    result.should.have.property('database');
                    done();
                } catch (e) {
                    done(e);
                };
            }, (err) => {
                try {
                    done(err);
                } catch (e) {
                    done(e);
                };
            });
    });
});

var tools = {
    api: {
        admin: {
            authenticate: () => {
                return tools.put('/edge-router/admin/authenticate', {});
            },
            changeemail: (current, replacement) => {
                config.email = current;

                return tools.post('/edge-router/admin/change-email', {
                    'email': replacement
                });
            },
            changepassword: (oldpass, newpass) => {
                return tools.post('/edge-router/admin/change-password', {
                    'old': oldpass,
                    'new': newpass,
                    'confirm': newpass
                });
            }
        },
        config: {
            get: () => {
                return tools.post('/edge-router/config/get', {})
            },
            // import: () => {
            //     return tools.post('/edge-router/config/import', {

            //     });
            // },
            // export: () => {
            //     return tools.post('/edge-router/config/export', {

            //     })
            // }
        },
        devices: {
            add: () => {
                return tools.post('/edge-router/devices/add', {
                    'deviceId': deviceId
                });
            },
            get: () => {
                return tools.post('/edge-router/devices/get', {
                    'filter': [
                        'role',
                        'deviceId',
                        'serverDate',
                        'description'
                    ],
                    'deviceId': deviceId
                });
            },
            list: () => {
                return tools.post('/edge-router/devices/list', {
                    'filter': [
                        'role',
                        'deviceId',
                        'serverDate',
                        'description'
                    ],
                    'deviceId': deviceId
                });
            },
            update: () => {
                return tools.post('/edge-router/devices/update', {
                    'deviceId': deviceId,
                    'description': 'ALL INPUTS',
                });
            },
            delete: () => {
                return tools.post('/edge-router/devices/delete', {
                    'deviceId': deviceId
                });
            }
        },
        mapping: {
            add: () => {
                return tools.post('/edge-router/mapping/add', {
                    'mapid': mapId
                });
            },
            get: () => {
                return tools.post('/edge-router/mapping/get', {
                    'filter': [
                        'mapId',
                        'source',
                        'destination'
                    ],
                    'mapId': mapId
                });
            },
            list: () => {
                return tools.post('/edge-router/mapping/list', {
                    'filter': [
                        'mapId',
                        'source',
                        'destination'
                    ],
                    'mapId': mapId
                });
            },
            update: () => {
                return tools.post('/edge-router/mapping/update', {
                    'mapId': mapId,
                    'description': 'Udated'
                });
            },
            delete: () => {
                return tools.post('/edge-router/mapping/update', {
                    'mapId': mapId
                })
            }
        },
        healthcheck: () => {
            return tools.put('/health-check', {});
        }
    },
    put: async (url, payload) => {
        var deferred = Q.defer();

        payload.header = {
            'email': config.email,
            'appId': config.appId,
            'password': config.password
        };

        payload = JSON.stringify(payload);

        const response = await fetch(config['edge-router'] + url, {
            'headers': {
                'Accept': '*/*',
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': JSON.stringify(config.token),
                'Content-Length': payload.length
            },
            'body': payload,
            'method': 'PUT'
        });

        const result = await response.json();

        deferred.resolve(result);

        return deferred.promise;
    },
    post: async (url, payload) => {
        var deferred = Q.defer();

        payload.header = {
            'email': config.email,
            'appId': config.appId,
            'password': config.password
        };

        payload = JSON.stringify(payload);

        const response = await fetch(config['edge-router'] + url, {
            'headers': {
                'accept': '*/*',
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': JSON.stringify(config.token),
                'Content-Length': payload.length
            },
            'body': payload,
            'method': 'POST'
        });

        const result = await response.json();

        deferred.resolve(result);

        return deferred.promise;
    }
};