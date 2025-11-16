/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let fullWeeks = Math.floor(n/7);
    let remainder = n % 7;
    return 28 * fullWeeks + 7 * (fullWeeks * (fullWeeks - 1) / 2) + remainder * (1 + fullWeeks) + remainder * (remainder - 1) / 2
};