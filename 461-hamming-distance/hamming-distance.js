/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let distance = 0;

    let xBit = x.toString(2);
    let yBit = y.toString(2);

    let maxLength = Math.max(xBit.length, yBit.length);

    xBit = xBit.padStart(maxLength, '0');
    yBit = yBit.padStart(maxLength, '0');

    for (let i = 0; i < maxLength; i++) {
        if (xBit[i] !== yBit[i]) {
            distance++;
        }
    }
    return distance;
    
    /* let xor = x ^ y;
    let count = 0;
    while (xor !== 0) {
        count += xor & 1;
        xor = xor >> 1;
    }
    return count; */
};