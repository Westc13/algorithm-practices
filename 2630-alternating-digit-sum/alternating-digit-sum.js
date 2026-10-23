/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    const digits = n.toString().split('').map(Number);
    const resultArr = [];
    for (let i = 0; i < digits.length; i++) {
        if (i % 2 !== 0) { resultArr.push(-digits[i]);
        } else {
            resultArr.push(digits[i]);
        }
    }
    return resultArr.reduce((accu, curr) => accu + curr, 0);
};