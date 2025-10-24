/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    let ones = 0;
    for (let ch of s) {
        if (ch === '1') {
            ones++;
        }
    }
    const zeros = s.length - ones;

    const frontOnes = ones > 1 ? '1'.repeat(ones - 1) : '';
    const middleZeros = '0'.repeat(zeros);
    const lastOne = '1';

    return frontOnes + middleZeros + lastOne;
};