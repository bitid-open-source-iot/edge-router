module.exports = (router) => {
    console.log('ABOUT TO TEST');

    var startValue = 65535;

    var data = [
        {
            'value': startValue,
            'inputId': '000000000000000000000001'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000002'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000003'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000004'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000005'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000006'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000007'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000008'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000009'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000010'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000011'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000012'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000013'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000014'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000015'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000016'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000017'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000018'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000019'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000020'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000021'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000022'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000023'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000024'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000025'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000026'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000027'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000028'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000029'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000030'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000031'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000032'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000033'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000034'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000035'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000036'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000037'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000038'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000039'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000040'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000041'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000042'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000043'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000044'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000045'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000046'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000047'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000048'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000049'
        },
        {
            'value': startValue,
            'inputId': '000000000000000000000050'
        }
    ];
    var deviceId = '000000000000000000000PLC';

    setTimeout(() => {
    //     console.log('TEST STARTED');
    //     router.route(deviceId, data);
        
        // var interval = setInterval(() => {
        //     data.map(o => {
        //         o.value++;
        //         startValue++;
        //     });
            router.route(deviceId, data);
        //     if (startValue <= 65535) {
        //         debugger
        //         clearInterval(interval);
        //     };
        // }, 500);
    }, 5000)
}