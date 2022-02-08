const Q = require('q');
const chai = require('chai');
const fetch = require('node-fetch');
const expect = require('chai').expect;
const should = require('chai').should();
const config = require('./config.json');
const subset = require('chai-subset');

chai.use(subset);

var endpointId = null;

// describe('Route', function () {
//     it('/edge-router/route/add', function (done) {
//         this.timeout(5000);

//         tools.api.route.add()
//             .then((result) => {
//                 try {
//                     endpointId = result.endpointId;
//                     result.should.have.property('endpointId');
//                     done();
//                 } catch (e) {
//                     done(e);
//                 };
//             }, (err) => {
//                 try {
//                     done(err);
//                 } catch (e) {
//                     done(e);
//                 };
//             });
//     });

//     it('/edge-router/route/get', function (done) {
//         this.timeout(5000);

//         tools.api.route.get()
//             .then((result) => {
//                 try {
//                     checks = result.checks;
//                     result.should.have.property('role');
//                     result.should.have.property('icon');
//                     result.should.have.property('endpointId');
//                     result.should.have.property('checks');
//                     result.should.have.property('addons');
//                     result.should.have.property('serverDate');
//                     result.should.have.property('description');
//                     result.should.have.property('organizationId');
//                     done();
//                 } catch (e) {
//                     done(e);
//                 };
//             }, (err) => {
//                 try {
//                     done(err);
//                 } catch (e) {
//                     done(e);
//                 };
//             });
//     });

//     it('/edge-router/route/list', function (done) {
//         this.timeout(5000);

//         tools.api.route.list()
//             .then((result) => {
//                 try {
//                     result[0].should.have.property('role');
//                     result[0].should.have.property('icon');
//                     result[0].should.have.property('endpointId');
//                     result[0].should.have.property('checks');
//                     result[0].should.have.property('addons');
//                     result[0].should.have.property('serverDate');
//                     result[0].should.have.property('description');
//                     result[0].should.have.property('organizationId');
//                     done();
//                 } catch (e) {
//                     done(e);
//                 };
//             }, (err) => {
//                 try {
//                     done(err);
//                 } catch (e) {
//                     done(e);
//                 };
//             });
//     });

//     it('/edge-router/route/update', function (done) {
//         this.timeout(5000);

//         tools.api.route.update()
//             .then((result) => {
//                 try {
//                     result.should.have.property('updated');
//                     expect(result.updated).to.equal(1);
//                     done();
//                 } catch (e) {
//                     done(e);
//                 };
//             }, (err) => {
//                 try {
//                     done(err);
//                 } catch (e) {
//                     done(e);
//                 };
//             });
//     });
// });

describe.only('admin', function () {
    it('/edge-router/admin/authenticate', function (done) {
        this.timeout(5000);

        tools.api.admin.authenticate()
            .then((result) => {
                try {
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

        tools.api.admin.changeemail()
            .then((result) => {
                try {
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

        tools.api.admin.changepassword()
            .then((result) => {
                try {
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

describe('devices', function () {
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
                    resul[0].should.have.property('io');
                    resul[0].should.have.property('ip');
                    resul[0].should.have.property('port');
                    resul[0].should.have.property('type');
                    resul[0].should.have.property('pxtime');
                    resul[0].should.have.property('txtime');
                    resul[0].should.have.property('barcode');
                    resul[0].should.have.property('publish');
                    resul[0].should.have.property('timeout');
                    resul[0].should.have.property('enabled');
                    resul[0].should.have.property('deviceId');
                    resul[0].should.have.property('description');
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

    it('/edge-router/devices/delete', function (done) {
        this.timeout(5000);

        tools.api.devices.delete()
            .then((result) => {
                try {
                    result.should.have('deleted');
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
});

describe('mapping', function () {
    it('/edge-router/mapping/add', function (done) {
        this.timeout(5000);

        tools.api.devices.add()
            .then((result) => {
                try {
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
    it('/edge-router/route/delete', function (done) {
        this.timeout(5000);

        tools.api.route.delete()
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
        route: {
            add: () => {
                return tools.post('/edge-router/route/add', {
                    'description': 'INPUTS'
                });
            },
            get: () => {
                return tools.post('/edge-router/route/get', {
                    'filter': [
                        'role',
                        'endpointId',
                        'serverDate',
                        'description'
                    ],
                    'endpointId': endpointId
                });
            },
            list: () => {
                return tools.post('/edge-router/route/list', {
                    'filter': [
                        'role',
                        'endpointId',
                        'serverDate',
                        'description'
                    ],
                    'endpointId': endpointId
                });
            },
            update: () => {
                return tools.post('/edge-router/route/update', {
                    'endpointId': endpointId,
                    'description': 'ALL INPUTS',
                });
            },
            delete: () => {
                return tools.post('/edge-router/route/delete', {
                    'endpointId': endpointId
                });
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
            'appId': config.appId
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
            'appId': config.appId
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