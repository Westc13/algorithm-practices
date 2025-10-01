/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    const total = n * (n + 1) / 2;
    const x = Math.sqrt(total);
    return Number.isInteger(x) ? x: -1;
};