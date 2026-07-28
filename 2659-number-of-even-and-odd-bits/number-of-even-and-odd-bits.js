/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function(n) {
    /* let even = 0;
    let odd = 0;
    const binN = n.toString(2);
    for (let i = 0; i < binN.length; i++) {
        const bitIndex = binN.length - 1 - i;
        if (binN[i] === '1') {
            if (bitIndex % 2 === 0) {
                even++;
            } else {
                odd++;
            }
        }
    }
    return [even, odd]; */

    let even = 0;
    let odd = 0;
    let index = 0;

    while (n > 0) {
        if (n & 1) {
            if (index % 2 === 0) {
                even++;
            } else {
                odd++;
            }
        }
        n >>= 1;
        index++;
    }
    return [even, odd];
};