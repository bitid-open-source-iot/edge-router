const Q = require('q');
const chai = require('chai');
const fetch = require('node-fetch');
const expect = require('chai').expect;
const should = require('chai').should();
const config = require('./config.json');
const subset = require('chai-subset');
chai.use(subset);

var endpointId = null;

describe('Route', function () {
    it('/project/route/add', function (done) {
        this.timeout(5000);

        tools.api.route.add()
            .then((result) => {
                try {
                    endpointId = result.endpointId;
                    result.should.have.property('endpointId');
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

    it('/project/route/get', function (done) {
        this.timeout(5000);

        tools.api.route.get()
            .then((result) => {
                try {
                    checks = result.checks;
                    result.should.have.property('role');
                    result.should.have.property('icon');
                    result.should.have.property('endpointId');
                    result.should.have.property('checks');
                    result.should.have.property('addons');
                    result.should.have.property('serverDate');
                    result.should.have.property('description');
                    result.should.have.property('organizationId');
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

    it('/project/route/list', function (done) {
        this.timeout(5000);

        tools.api.route.list()
            .then((result) => {
                try {
                    result[0].should.have.property('role');
                    result[0].should.have.property('icon');
                    result[0].should.have.property('endpointId');
                    result[0].should.have.property('checks');
                    result[0].should.have.property('addons');
                    result[0].should.have.property('serverDate');
                    result[0].should.have.property('description');
                    result[0].should.have.property('organizationId');
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

    it('/project/route/update', function (done) {
        this.timeout(5000);

        tools.api.route.update()
            .then((result) => {
                try {
                    result.should.have.property('updated');
                    expect(result.updated).to.equal(1);
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
    it('/project/route/delete', function (done) {
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
                return tools.post('/project/route/add', {
                    'description': 'INPUTS'
                });
            },
            get: () => {
                return tools.post('/project/route/get', {
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
                return tools.post('/project/route/list', {
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
                return tools.post('/project/route/update', {
                    'endpointId': endpointId,
                    'description': 'ALL INPUTS',
                });
            },
            delete: () => {
                return tools.post('/project/route/delete', {
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

        const response = await fetch(config.project + url, {
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

        const response = await fetch(config.project + url, {
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