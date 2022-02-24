var BitMask = (bit, raw) => {
    if (typeof (raw) != 'string') {
        raw = raw.toString();
    };
    let arr = []
    raw = BigInt(raw)
    for (let i = 0; i < 256; i++) {
        arr.push(parseInt(raw & 1n))
        raw = raw >> 1n
    };
    return arr[bit];
};

module.exports = BitMask;