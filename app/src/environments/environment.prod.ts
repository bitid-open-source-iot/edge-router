export const environment = {
    'socket': window.location.origin.replace('http', 'ws'),
    'server': window.location.origin,
    'version': require('../../package.json').version,
    'production': true
};
