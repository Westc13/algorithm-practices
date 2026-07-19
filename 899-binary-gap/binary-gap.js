/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    const nBin = n.toString(2);

    let lastOne = -1;
    let maxGap = 0;

    for (let i = 0; i < nBin.length; i++) {
        if (nBin[i] === '1') {
            if (lastOne !== -1) {
                maxGap = Math.max(maxGap, i - lastOne)
            }
            lastOne = i;
        }
    }
    return maxGap;
};