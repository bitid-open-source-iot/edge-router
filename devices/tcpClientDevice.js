var TCPCLT = require('../lib/tcpClient')
var EventEmitter = require("events").EventEmitter;

class TCP_CLIENT_DEVICE extends EventEmitter {
    constructor(options) {
        super();
        this.io = options.io;

        this.barcode = options.barcode;
        this.enabled = options.enabled;
        this.publish = options.publish || false
        this.deviceId = options.deviceId;
        this.id = options.id;
        this.description = options.description;
        this.unitId = options.unitId || 0


        this.values = [];
        this.forceChange = true
        this.options = options
        this.tcpClient = new TCPCLT()
        this.init(this.options.ip, this.options.port, 1)
    }

    init(server, port, debug) {
        let self = this
        try {
            self.tcpClient.init(server, port, debug)
            self.tcpClient.on('data', async (dataIn) => {
                let change = false;
                let sock = dataIn[0]
                let data = dataIn[1]
                console.log('tcpClient data', data.toString())

                let arrPayloads = data.toString().split('*')
                for (let i = 0; i < arrPayloads.length - 1; i++) {
                    let arrData = arrPayloads[i].split(' ');
                    switch (arrData[1]) {
                        case ('%1'):
                            self.options.io.map((item) => {
                                let moduleId = arrData[3].split('.')[1]
                                if ((parseInt(item.rtuId) == parseInt(arrData[0]) && parseInt(item.moduleId) == parseInt(moduleId))) {
                                    let regValue = arrData[item.register + 1]
                                    let o = this.values.find(o => o.inputId == item.inputId)
                                    if (o) {
                                        if (this.forceChange == true) {
                                            if (o.inputId == item.inputId) {
                                                change = true;
                                                o.value = regValue;
                                            }
                                        } else if (o.inputId == item.inputId) {
                                            if (o.value != regValue && (Math.abs(parseFloat(o.value - regValue)) >= parseFloat(item.cofs) || parseFloat(item.cofs) == -1)) {
                                                change = true;
                                                o.value = regValue;
                                            }
                                        };
                                    } else {
                                        change = true;
                                        this.values.push({
                                            value: regValue,
                                            inputId: item.inputId
                                        });
                                    };
                                }
                            })
                            break
                        default:
                            console.log('TCP_CLIENT_DEVICE unhandled message switch', arrData.join(' '))
                    }
                }
                if (this.values.length > 0) {
                    this.emit('data', this.values);
                    if (change == true || change == false) {
                        this.forceChange = false
                        this.emit('change', this.values);
                    };
                }
            })
        } catch (e) {
            console.log('TCP_CLIENT_DEVICE init error', e)
        }
    }


    async forceCOFS() {
        this.forceChange = true
    }
}
module.exports = TCP_CLIENT_DEVICE