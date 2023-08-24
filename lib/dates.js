exports.compressDateGlog = (aDate,aTimezone) => {
    var vDateValue = 0;
    var date;
    var timezone = aTimezone || 2;

    var dateNow = new Date();
    var date = aDate || dateNow;

    var hour = 0;
    hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min = 0;
    min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec = 0;
    sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = 0;
    year = date.getFullYear() - 2000;

    var month = 0;
    month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day = 0;
    day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    vDateValue = year * (Math.pow(2,26));
    vDateValue = vDateValue + (month * (Math.pow(2,22)));
    vDateValue = vDateValue + (day * (Math.pow(2,17)));
    vDateValue = vDateValue + (hour * (Math.pow(2,12)));
    vDateValue = vDateValue + (min * (Math.pow(2,6)));
    vDateValue = vDateValue + (sec * 1);
    return vDateValue;    
}

exports.waitQ = (ms) => {
    var deferred = Q.defer();
    setTimeout(() => {
        deferred.resolve();
    }, ms);
    return deferred.promise;
}