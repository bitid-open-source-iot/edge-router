const Q = require('q');
const fs = require('fs');

module.exports = async (args) => {
    var deferred =  Q.defer();

    fs.writeFile(__base + '/config.json', JSON.stringify(args, null, 4), 'utf8', (err) => {
        if (err) {
            deferred.reject(false);
        } else {
            deferred.resolve(true);
        };
    });

    return deferred.promise;
}