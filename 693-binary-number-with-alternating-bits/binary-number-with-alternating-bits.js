/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    const nBin = n.toString(2);
    let result = true;
    for (let i = 0; i < nBin.length - 1; i++) {
        if (nBin[i] === nBin[i + 1]) {
            result = false;
        }
    }
    return result;
};