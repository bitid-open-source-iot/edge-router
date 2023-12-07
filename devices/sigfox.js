const EventEmitter = require('events').EventEmitter;

class SIGFOX extends EventEmitter {
    constructor(){
        super();

        this.io = args.io;
        this.type = args.type;
        this.values = [];
        this.txtime = args.txtime;
        this.pxtime = args.pxtime || 120;
        this.status = 'disconnected';
        this.timeout = 10;
        this.timeout = args.timeout || 60;
        this.barcode = args.barcode;
        this.enabled = args.enabled;
        this.deviceId = args.deviceId;
        this.id = args.id;
        this.lastConnection = new Date();
        this.publish = args.publish || false;

        this.io.map(item=>{
            if(item.key == 'commsStatus'){
                this.timeout = parseInt(item.cofs)
            }
        })

    }

    sign(val) {
        if (((val & 128) >> 7) == 1) {
            return (val & 127) * -1;
        } else {
            return val & 127;
        }
    }


    async processData(req){
        var deferred = Q.defer();

        var self = this;

        var device = req.body.device;
        device = device.padStart(8, 0)
        var deviceTime = parseInt(req.body.time);

        var rssi = req.body.rssi || 0;
        if (req.body.linkquality || req.body.linkQuality) {
            let response = {}
            response.linkquality = req.body.linkquality || req.body.linkQuality
            try {
                response = await self.rssiFromlinkquality(response)
                rssi = response.rssi || 0
            } catch (e) {
                rssi = 0
            }
        }

        var time = new dates.module().compressDateGlog(new Date(deviceTime * 1000), 2);
        var data = req.body.data;
        var rtuId = parseInt(device, 16);
        var args = {
            "rtuId": rtuId, "data": data, "originalData": data, "apiDetails": self.apiDetails, "values": {
                time: time,
                TxFlag: null,
                digitalsIn: null,
                AI1: null,
                AI2: null,
                AI3: null,
                AI4: null,
                AIExt1: null,
                AIExt2: null,
                AIExt3: null,
                AIExt4: null,
                AIExt5: null,
                AIExt6: null,
                AIExt7: null,
                AIExt8: null,
                CI1: null,
                CI2: null,
                CI3: null,
                CI4: null,
                CI5: null,
                CI6: null,
                CI7: null,
                CI8: null,
                BATT: null,
                SIG: rssi
            }
        }

        args.typeId = self.typeId
        args.barcode = device


        var arrData = [];
        for (var i = 0; i < data.length; i += 2) {
            arrData.push(parseInt(data.substring(i, i + 2), 16));
        };


        switch (parseInt(req.body.type)) {
            case (1):
                let sensorType = parseInt(arrData[0])
                let status = parseInt(arrData[1])
                let parameter1 = (parseInt(arrData[2]) << 8) + parseInt(arrData[3])
                let parameter2 = (parseInt(arrData[4]) << 8) + parseInt(arrData[5])
                let battery = (status & 192) >> 6

                switch (battery) {
                    case (0):
                        battery = 10
                        break
                    case (1):
                        battery = 30
                        break
                    case (2):
                        battery = 60
                        break
                    case (3):
                        battery = 99
                        break
                    default:
                        battery = -1
                }
                args.values.BATT = battery

                let statusAlarm2 = status & 3
                switch (statusAlarm2) {
                    case (0):
                        args.values.digitalsIn += 0
                        break
                    case (1):
                        args.values.digitalsIn += 1
                        break
                    case (3):
                        args.values.digitalsIn += 2
                        break
                    default:
                        console.error('unhandled switch1 in sigfoxDaviteqUltrasonic')
                }


                let statusAlarm1 = (status & 12) >> 2
                switch (statusAlarm1) {
                    case (0):
                        args.values.digitalsIn += 0
                        break
                    case (1):
                        args.values.digitalsIn += (1 << 2)
                        break
                    case (3):
                        args.values.digitalsIn += (2 << 2)
                        break
                    default:
                        console.error('unhandled switch2 in sigfoxDaviteqUltrasonic')
                }

                args.values.digitalsIn += (status & 48)

                args.values.AI1 = parameter1 //Level
                args.values.AI2 = sensorType
                args.values.AI3 = parameter1
                args.values.AI4 = parameter2
                break;
            case (2):
                /**
                 * wtf why do I need to rotate the data right 4 bits? Doesnt make sense according to the documentation
                */
                let eventId = (parseInt(arrData[0]) >> 4) & 15
                switch (eventId) {
                    case (0):   //startup
                    case (1):   //heartbeat
                    case (2):   //parameters update
                        break
                    case (3):
                    case (4):
                    case (5):
                        let hardwareError = (parseInt(arrData[0]) & 16) >> 4
                        let battery = (parseInt(arrData[1]) & 12) >> 2
                        let alarm = (parseInt(arrData[1]) & 2)
                        let level = (parseInt(arrData[2]) << 8) + parseInt(arrData[3])
                        let distance = (parseInt(arrData[4]) << 8) + parseInt(arrData[5])

                        switch (battery) {
                            case (0):
                                battery = 10
                                break
                            case (1):
                                battery = 30
                                break
                            case (2):
                                battery = 60
                                break
                            case (3):
                                battery = 99
                                break
                            default:
                                battery = -1
                        }
                        args.values.BATT = battery

                        args.values.digitalsIn += hardwareError

                        switch (alarm) {
                            case (0):
                                args.values.digitalsIn += 0
                                break
                            case (1):
                                args.values.digitalsIn += (1 << 2)
                                break
                            case (3):
                                args.values.digitalsIn += (1 << 3)
                                break
                            default:
                                console.error('unhandled switch2 in sigfoxDaviteqUltrasonic')
                        }


                        args.values.AI1 = level
                        args.values.AI3 = distance
                        break
                    default:
                        console.error('unhandled switch1 in sigfoxDaviteqUltrasonic')
                }

                break;

            default:
                console.error('Unhandled case for sigfoxDaviteqUltrasonicDriver')
                deferred.reject('Unhandled case for sigfoxDaviteqUltrasonicDriver')
        }

        try{
            await self.processIO(args)
            deferred.resolve()
        }catch(e){
            deferred.reject(e)
        }

        deferred.resolve();
    }

    async processIO(args){
        await this.io.reduce((promise, item) => {
            return promise.then(async () => {
                var deferred = Q.defer();


                console.log('item', item)

                return deferred.promise;
            });
        }, Promise.resolve())
        .then(() => {
            this.emit('data', this.values);
            if (change) {
                this.forceChange = false
                this.emit('change', this.values);
            };
        });

    }

}
module.exports = SIGFOX;