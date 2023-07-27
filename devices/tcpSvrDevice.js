const TCPSVR = require('../lib/tcpServerV1')

class TCP_SVR_DEVICE {
    constructor(options) {
        this.options = options
        this.tcpRTU = new TCPSVR()
        this.tcpSoftware = new TCPSVR()
        this.init(this.options.port, `RTU ${this.options.description}`, this.options.softwarePort, `Software ${this.options.description}`)
    }

    init(rtuPort, rtuDescription, sofwarePort, sofwareDescription) {
        let self = this
        try {
            self.tcpSoftware.init(sofwarePort, sofwareDescription)
            self.tcpSoftware.on('data', (sock, data) => {
                console.log('tcpSoftware data', data.toString())
            })
    
            let arrData = []
            self.tcpRTU.init(rtuPort, rtuDescription)
            self.tcpRTU.on('data', (dataIn) => {
                let sock = dataIn[0]
                let data = dataIn[1]
                let arrPayloads = data.toString().split('%')
                for (let i = 1; i < arrPayloads.length; i++) {
                    arrData = arrPayloads[i].split(' ');
                    switch (arrData[0]) {
                        case 'S':   //RTU Logon
                            sock.write(`%S *`)
                            self.tcpRTU.setUnitAddress(sock, parseInt(arrData[1]))
                            break
                        case '1':
                            sock.write(`%1 ${arrData[2]} *`)    //Acknowledge the message back to the rtu
                            self.tcpSoftware.SendData(`${sock.unitAddress} %${arrData.join(' ')}`, -1) //Broadcast message to all software clients
                            break
                        default:
                            console.log('TCP_SVR_DEVICE unhandled message switch', arrData.join(' '))
                    }
                }
            })
        }catch(e){
            console.log('TCP_SVR_DEVICE init error', e)
        }
    }
}
module.exports = TCP_SVR_DEVICE