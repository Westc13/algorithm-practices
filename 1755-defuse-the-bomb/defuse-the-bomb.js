/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    const n = code.length;
    const result = new Array(n).fill(0);

    if (k === 0) return result;

    for (let i = 0; i < n; i++) {
        let sum = 0;

        if (k > 0) {
            for (let step = 1; step <= k; step++) {
                sum += code[(i + step) % n];
            }
        } else {
            for (let step = 1; step <= Math.abs(k); step++) {
                sum += code[(i - step + n) % n];
            }
        }
        result[i] = sum;
    }
    return result;
};