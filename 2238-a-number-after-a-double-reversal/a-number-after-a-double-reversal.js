/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    let digits = num.toString().split('').map((num) => parseInt(num));
    if (digits.at(-1) === 0 && digits.length > 1) {
        return false;
    }
    return true;
};