const log4js = require('log4js');

exports.init = () => {
    log4js.configure(__settings.logger);
};

exports.info = (message) => {
    if (__socket) {
        __socket.connections.map(o => o.send(JSON.stringify({
            date: new Date(),
            type: 'info',
            message: message
        })));
    };
    if (!__settings?.production) {
        console.info(message);
    }
    const logger = log4js.getLogger('edge-router');
    logger.level = 'info';
    logger.info(message);
};

exports.warn = (message) => {
    if (__socket) {
        __socket.connections.map(o => o.send(JSON.stringify({
            date: new Date(),
            type: 'warn',
            message: message
        })));
    };
    if (!__settings?.production) {
        console.warn(message);
    }
    const logger = log4js.getLogger('edge-router');
    logger.level = 'warn';
    logger.warn(message);
};

exports.debug = (message) => {
    if (__socket) {
        __socket.connections.map(o => o.send(JSON.stringify({
            date: new Date(),
            type: 'debug',
            message: message
        })));
    };
    if (!__settings?.production) {
        console.debug(message);
    }
    const logger = log4js.getLogger('edge-router');
    logger.level = 'debug';
    logger.debug(message);
};

exports.error = (message) => {
    if (__socket) {
        __socket.connections.map(o => o.send(JSON.stringify({
            date: new Date(),
            type: 'error',
            message: message
        })));
    };
    if (!__settings?.production) {
        console.error(message);
    }
    const logger = log4js.getLogger('edge-router');
    logger.level = 'error';
    logger.error(message);
};