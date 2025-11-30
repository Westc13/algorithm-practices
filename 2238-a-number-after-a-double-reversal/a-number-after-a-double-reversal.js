/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    /* let digits = num.toString().split('').map((num) => parseInt(num));
    if (digits.at(-1) === 0 && digits.length > 1) {
        return false;
    }
    return true; */

    let digits = num.toString().split('');
    let reverse1 = parseInt(digits.reverse().join(''));
    let reverse2 = parseInt(reverse1.toString().split('').reverse().join(''));
    if (num === reverse2) {
        return true
    }
    return false;
};