/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    const digits = x.toString().split('').map(Number);
    const sum = digits.reduce((accumulator, currentVal) => accumulator + currentVal);
    if (x % sum === 0) {
        return sum;
    }
    return -1
};