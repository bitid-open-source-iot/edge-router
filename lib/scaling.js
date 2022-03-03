var module = function () {
  var scale = {
    ntcTable: [
      { "degC": -40, "voltage": 3205.195599022 },
      { "degC": -35, "voltage": 3170.5342237062 },
      { "degC": -30, "voltage": 3125.6911665543 },
      { "degC": -25, "voltage": 3068.3691756272 },
      { "degC": -20, "voltage": 2996.5368812366 },
      { "degC": -15, "voltage": 2908.3333333333 },
      { "degC": -10, "voltage": 2802.2464698331 },
      { "degC": -5, "voltage": 2677.8580024067 },
      { "degC": 0, "voltage": 2535.2071005917 },
      { "degC": 5, "voltage": 2376.2358546754 },
      { "degC": 10, "voltage": 2204.1192679997 },
      { "degC": 15, "voltage": 2022.4052718287 },
      { "degC": 20, "voltage": 1836.1019348749 },
      { "degC": 25, "voltage": 1650 },
      { "degC": 30, "voltage": 1469.0473379766 },
      { "degC": 35, "voltage": 1296.9004261914 },
      { "degC": 40, "voltage": 1136.820083682 },
      { "degC": 45, "voltage": 990.2457185406 },
      { "degC": 50, "voltage": 858.6337163545 },
      { "degC": 55, "voltage": 741.8604651163 },
      { "degC": 60, "voltage": 639.6226415094 },
      { "degC": 65, "voltage": 550.1950216297 },
      { "degC": 70, "voltage": 473.0611500957 },
      { "degC": 75, "voltage": 406.7211371649 },
      { "degC": 80, "voltage": 349.8164457041 },
      { "degC": 85, "voltage": 301.2180738965 },
      { "degC": 90, "voltage": 259.7177300794 },
      { "degC": 95, "voltage": 224.2667618538 },
      { "degC": 100, "voltage": 194.0243511695 },
    ],
    scaleNTC: function (rawValue) {
      var arrData = scale.ntcTable;
      for (var i = 0; i < arrData.length - 1; i++) {
        if (rawValue >= arrData[i + 1].voltage && rawValue <= arrData[i].voltage) {
          // console.log('scale NTC',i)
          return scale.scaleAnalogNTC(rawValue, arrData[i + 1].voltage, arrData[i].voltage, arrData[i].degC, arrData[i + 1].degC);
        }

      }
    },
    scaleAnalogNTC: function (status, rawLow, rawHi, scaleLow, scaleHi) {
      // console.log('status',status)
      // console.log('rawLow',rawLow)
      // console.log('rawHi',rawHi)
      // console.log('scaleLow',scaleLow)
      // console.log('scaleHi',scaleHi)

      var ans = (((status - rawLow) / (rawHi - rawLow)) * ((scaleHi - scaleLow)));
      ans = scaleHi - ans;
      // console.log('ans',ans)

      if (ans < scaleLow) {
        ans = scaleLow
      }
      if (ans > scaleHi) {
        ans = scaleHi
      }
      return ans;
    },
    scaleAnalog: function (status, rawLow, rawHi, scaleLow, scaleHi, invertOutput) {
      var ans = (((status - rawLow) / (rawHi - rawLow)) * ((scaleHi - scaleLow))) + scaleLow;

      if (ans < scaleLow) {
        ans = scaleLow
      }
      if (ans > scaleHi) {
        ans = scaleHi
      }

      if (invertOutput == true) {
        return (scaleHi - scaleLow) - ans;
      } else {
        return ans;
      }
    },
  }
  return scale;
}
exports.module = module;