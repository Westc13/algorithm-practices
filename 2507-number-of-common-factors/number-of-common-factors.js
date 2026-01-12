/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    const n = Math.min(a, b);
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (a % i === 0 && b % i === 0) {
            count ++;
        } 
    }
    return count;
};