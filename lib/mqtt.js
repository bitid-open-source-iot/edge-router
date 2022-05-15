const MQTT = require('mqtt');
const EventEmitter = require('events').EventEmitter;

class MqttSocket extends EventEmitter {

    constructor() {
        super();
    };

    connect(options) {
        this.options = options
        let self = this
        try {
            console.log('Connecting to mqtt: ' + JSON.stringify(options));

            setInterval(function () {
                if (self.mqtt?.connected != true) {
                    self.mqtt = MQTT.connect([options.ip, ':', options.port].join(''), {
                        'host': options.ip,
                        'port': options.port,
                        'clean': true,
                        'username': options.userName,
                        'password': options.password,
                        'keepalive': 60
                    });
                }
            }, 10000)

            self.mqtt = MQTT.connect([options.ip, ':', options.port].join(''), {
                'host': options.ip,
                'port': options.port,
                'clean': true,
                'username': options.userName,
                'password': options.password,
                'keepalive': 60
            });

            this.mqtt.on('end', () => {
                console.error('Connecting to mqtt: END');
            });

            this.mqtt.on('close', () => {
                console.error('Connecting to mqtt: CLOSE');
                console.log('server', options)
            });

            this.mqtt.on('offline', () => {
                console.error('Connecting to mqtt: OFFLINE');
            });

            this.mqtt.on('disconnect', () => {
                console.error('Connecting to mqtt: DISCONNECT');
            });

            this.mqtt.on('error', error => {
                console.error(error);
            });

            this.mqtt.on('connect', () => {
                console.log('Connecting to mqtt: Success', options);

                this.mqtt.subscribe(options.io[0]?.mqtt?.subscribe?.data, (error) => {
                    if (error) {
                        console.error(error);
                    } else {
                        console.log('Subscribed to mqtt data', options.io[0]?.mqtt?.subscribe?.data);
                    };
                });

                this.mqtt.subscribe(options.io[0]?.mqtt?.subscribe?.control, (error) => {
                    if (error) {
                        console.error(error);
                    } else {
                        console.log('Subscribed to mqtt control', options.io[0]?.mqtt?.subscribe?.control);
                    };
                });
            });


            this.mqtt.on('message', (topic, message) => {
                this.emit('data', { topic, message })
            });

        } catch (error) {
            console.error(error);
        };
    };

    send(topic, payload) {
        this.mqtt.publish(topic, JSON.stringify(payload));
    };

};

module.exports = MqttSocket;