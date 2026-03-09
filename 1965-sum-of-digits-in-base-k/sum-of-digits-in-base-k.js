/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
    const baseK = n.toString(k);
    const digits = baseK.split('').map(Number);
    return digits.reduce((accu, curr) => accu + curr, 0)
};