const Q = require('q');
const chai = require('chai');
const fetch = require('node-fetch');
const moment = require('moment');
const expect = require('chai').expect;
const should = require('chai').should();
const config = require('./config.json');
const subset = require('chai-subset');
const ObjectId = require('../lib/object-id');
global.__settings = require('../config.json')
global.__logger = require('../lib/logger');
global.__socket = null;

chai.use(subset);

var email = config.email;
var mapId = null;
var exported = require('../config.json');
var deviceId = null;

describe('Software & Testing Details', function () {
    it('DATE: ' + moment().format('DD/MM/YYYY HH:mm:ss'), function (done) {
        this.timeout(5000);
        done();
    });

    it('AUTHOR: ' + require('os').userInfo().username, function (done) {
        this.timeout(5000);
        done();
    });

    it('VERSION: ' + require('../package.json').version, function (done) {
        this.timeout(5000);
        done();
    });
});


describe('Admin', function () {
    it('/Test modbus masking', function (done) {
        this.timeout(5000);


        __settings.devices.filter(o => o.enabled).map(async o => {
            switch (o.type) {
                case ('modbus'):
                    var MODBUS = require('../devices/modbus')
                    let modbus = new MODBUS(o)
                    await modbus.write('621f47624f131a9601cae9d2', 1)
                    modbus.update()
                    // setTimeout(()=>{
                    //     modbus.update()
                    // },1000)
                    break;
                default:
                    __logger.warn('Device Type Not Found!')
                    break;
            };

        })


    });
})