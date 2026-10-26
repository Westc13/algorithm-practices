/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    const nBit = n.toString(2).padStart(32, '0');
    const nBitRev = nBit.split('').reverse().join('');
    const result = parseInt(nBitRev, 2);
    return result;
};