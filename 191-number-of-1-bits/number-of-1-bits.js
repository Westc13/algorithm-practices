/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    const nBit = n.toString(2);
    for (let i = 0; i < nBit.length; i++) {
        if (nBit[i] === '1') {
            count++;
        }
    }
    return count;
};