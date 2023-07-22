/**
 * Created by shane on 9/30/15.
 * Stollen from telemetry 20230722
 */

var EventEmitter = require( "events" ).EventEmitter;
var net = require('net');


class tcpClient extends EventEmitter{
    constructor(){
        super();
        this.RMCSocket = {
            Status: 'DISCONNECTED'
        };
        this.thisclient;
    }

    init(Server, Port, Debug){
        var self = this;
        self.thisServer = Server;
        self.thisPort = Port;
        self.thisdebug = Debug;
        self.connect()
        setInterval(()=>{self.connect()},5000)
    }


    close(){
        var self = this;
        try {
            // console.log('closing tcpclient');
            clearInterval(self.connection);
            if(self.thisclient != undefined){
                self.thisclient.destroy();
            }
        }
        catch (e) {
            // myLogger.LogData('File: {0} Desc: {1} e: {2}'.format('tcpclient.js','tcpclient error on close',e), 5);            
        }
    }
    connect() {
        var self = this;

        //Establish TCP socket connection to RMC and listen for Data from RTU. We subscribe to messages we want to hear.

        
        if (self.RMCSocket.Status == 'DISCONNECTED') {
            self.emit("RMCSocket", self.RMCSocket.Status);

            self.RMCSocket.Status = 'CONNECTING';
            if (self.thisdebug == 1) {
                console.log('RMCSocket - CONNECTING');
            }

            var newclient = new net.Socket();
            newclient.connect(self.thisPort, self.thisServer, function () {
                self.RMCSocket.Status = 'CONNECTED';
                self.emit("connection", self.RMCSocket.Status);

                if (self.thisdebug == 1) {
                    console.log('RMCSocket - CONNECTED');
                }

                self.thisclient = newclient;

                newclient.setKeepAlive(true);


                let bufdata = Buffer.alloc(0)
                let arrIntervals = []
                let tmrRx = function () {
                    arrIntervals.forEach(clearInterval)
                    let locbuf = bufdata
                    bufdata = Buffer.alloc(0)
                    if (locbuf.length > 0) {
                        self.emit("data", [newclient,locbuf]);
                    }
                }
    
                newclient.on('data', function (data) {
                    arrIntervals.forEach(clearInterval)
                    let rx = setInterval(tmrRx,100)
                    arrIntervals.push(rx)
                    const totalLen = bufdata.length + data.length
                    bufdata = Buffer.concat([bufdata, data], totalLen)
                });
            });

            newclient.on('error', function (e) {
                self.RMCSocket.Status = 'DISCONNECTED';
                if (self.thisdebug == 1) {
                    console.log("RMCSocket - DISCONNECTED-error",e);
                }
                newclient.destroy();
            });
            newclient.on('end', function () {
                self.RMCSocket.Status = 'DISCONNECTED';
                if (self.thisdebug == 1) {
                    console.log("RMCSocket - DISCONNECTED-end");
                }
                newclient.destroy();
            });
            newclient.on('timeout', function () {
                self.RMCSocket.Status = 'DISCONNECTED';
                if (self.thisdebug == 1) {
                    console.log("RMCSocket - DISCONNECTED-timeout");
                }
                newclient.destroy();
            });
            newclient.on('close', function () {
                self.RMCSocket.Status = 'DISCONNECTED';
                if (self.thisdebug == 1) {
                    console.log("RMCSocket - DISCONNECTED-close");
                }
                newclient.destroy();
            });


        }

    }
    SendData(strData) {
        var self = this;
        try {
            if(self.thisclient != undefined){
                self.thisclient.write(strData);
            }
        }
        catch (e) {
            console.log('tcpclient SendData Error',e)
        }

    }
}
module.exports = tcpClient

