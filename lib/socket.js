const crypto = require('crypto');
const EventEmitter = require('events').EventEmitter;
const WebSocketServer = require('websocket').server;

class WebSocket extends EventEmitter {

    constructor(server) {
        super();

        this.socket = new WebSocketServer({
            'httpServer': server
        });

        this.connections = [];

        this.socket.on('request', (connection) => {
            var params = connection.resourceURL.query || {};
            var socket = connection.accept(null, connection.origin);
            socket.userId = (crypto.randomBytes(Math.ceil(64 / 2)).toString('hex').slice(0, 64));
            this.add(socket, params);
        });
    }
    
    async add(socket, params) {
        socket.on('close', (data) => {
            for (var i = this.connections.length - 1; i >= 0; i--) {
                if (this.connections[i].userId == socket.userId) {
                    this.connections.splice(i, 1);
                    break;
                };
            };
        });
        this.connections.push({
            route: params.route,
            userId: socket.userId,
            socket: socket
        });
        this.emit('connection', socket);
    }

    async send(catagory, data) {
        delete data.filter;
        delete data.header;
        catagory = catagory.split(':');
        const route = catagory[0];
        const process = catagory[1];
        try {
            var sent = 0;
            for (var i = this.socket.connections.length - 1; i >= 0; i--) {
                if (this.connections[i].route == route) {
                    this.connections[i].socket.send(JSON.stringify({
                        result: data,
                        process: process
                    }));
                    sent++;
                };
            };
            return {
                'ok': true,
                'result': sent
            };
        } catch (error) {
            return {
                'ok': false,
                'error': error
            };
        };
    }

}

class WebSocketPayload {

    constructor(args) {
        this.result = args?.result;
        this.process = args?.process;
    }
    
}

module.exports = {
    WebSocket,
    WebSocketPayload
};