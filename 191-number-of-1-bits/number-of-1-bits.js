/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    /* let count = 0;
    const nBit = n.toString(2);
    for (let i = 0; i < nBit.length; i++) {
        if (nBit[i] === '1') {
            count++;
        }
    }
    return count; */

    /* let count = 0;
    while (n > 0) {
        if ((n & 1) === 1) {
            count++;
        }
        n = n >> 1;
    }
    return count; */
    

    let count = 0;
    while (n > 0) {
        n = n & (n -1);
        count++;
    }
    return count;
};