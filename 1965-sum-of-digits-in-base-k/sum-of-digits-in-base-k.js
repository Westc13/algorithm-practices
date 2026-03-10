/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
    /* const baseK = n.toString(k);
    const digits = baseK.split('').map(Number);
    return digits.reduce((accu, curr) => accu + curr, 0) */

    let sum = 0;
    while (n > 0) {
        sum += n % k;
        n = Math.floor(n / k);
    }
    return sum
};