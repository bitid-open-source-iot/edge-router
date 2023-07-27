var net = require('net');
const { EventEmitter } = require("./tcpClient");

class TCPSERVER_V1 extends EventEmitter {
    constructor() {
        super();
        this.mySocks = [];
        this.thisServer = '';
        this.thisDescription = '';
        this.thisPort = 0;
        this.thisdebug = 0;

    }

    init(Port, Description) {
        let self = this;
        self.thisServer = '0.0.0.0';
        self.thisPort = Port;
        self.thisDescription = Description;
        self.doListen()
    }

    doListen() {
        let self = this;
        try {
            var newserver = new net.createServer();
            newserver.listen(self.thisPort, self.thisServer);
            console.log('TCP Server ' + self.thisDescription + ' listening on ' + self.thisServer + ':' + self.thisPort);
            newserver.on('connection', function (sock) {
                self.mySocks.push(sock);
                // console.log('CONNECTED : ' + sock.remoteAddress +':'+ sock.remotePort + ' thisPort: ' + self.thisPort);
                self.emit("connection", [sock]);
                sock.on('data', function (data) {
                    // console.log('Socket remoteAddress: ' + sock.remoteAddress);
                    // console.log('socketDataToSend',data)
                    let strData = data.toString()
                    self.emit("data", [sock, data]);
                });
                sock.on('close', function (data) {
                    // console.log('tcpServer sock close')
                    self.emit("close", [sock, data]);
                    var i;
                    for (i = 0; i < self.mySocks.length; i++) {
                        if (self.mySocks[i].remotePort == sock.remotePort) {
                            self.mySocks.splice(i, 1);
                            break;
                        }
                    }
                });
                sock.on('error', function () {
                    if (this.thisdebug == 1) {
                        // console.log("tcpsvr on error");
                        try {
                            self.emit("error", [sock]);
                        } catch (e1) {

                        }

                    }
                });


            });
        }
        catch (e) {
            console.error('File: {0} Desc: {1} e: {2}'.format('tcpServer.js','Listen Error',e), '');
            // console.log('Listen Error: ', e);
        }
    }


    setUnitAddress(sock, address) {
        let self = this;
        try {
            var i;
            for (i = 0; i < self.mySocks.length; i++) {
                var thissock = self.mySocks[i];
                if (thissock == sock) {
                    // console.log('UnitAddress set to',address);
                    // console.log('UnitAddress was',thissock.unitAddress);
                    thissock.unitAddress = address;
                    return;
                }
            }
        }
        catch (e) {
            // console.error('File: {0} Desc: {1} e: {2}'.format('tcpServer.js','setUnitAddress Error',e), '');
            // console.log('tcpsvr error: ', e.message);
        }
    }

    SendData(strData, unitAddress) {
        let self = this;
        try {
            var i;
            if (typeof unitAddress == 'undefined') {
                // console.log('unitAddress not allowed to be undefined');
                return;
            }
            for (i = 0; i < self.mySocks.length; i++) {
                var thissock = self.mySocks[i];
                if (unitAddress == -1 && typeof (strData) != 'undefined') {
                    // console.log('Sending to Multi Sock on Port: ', self.thisPort + ' unitAddress: ' + thissock.unitAddress + ' strData: ' + strData);
                    thissock.write(strData);
                }
                else {
                    if (thissock.unitAddress == unitAddress) {
                        // console.log('found sock to send to')
                        // console.log('Sending to Single Sock',thissock.unitAddress)
                        thissock.write(strData);
                    }
                    else {
                        // console.log('No Data sent', 'unitAddress: ' + thissock.unitAddress + ' strData: ' + strData);
                    }
                }
            }
        }
        catch (e) {
            // console.error('File: {0} Desc: {1} e: {2}'.format('tcpServer.js','SendData Error',e), '');
            // console.log('tcpsvr error: ', e.message);
        }
    }


}
module.exports = TCPSERVER_V1;