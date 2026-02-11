/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    /* const n = code.length;
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
    return result; */

    const n = code.length;
    const result = new Array(n).fill(0);

    if (k === 0) return result;

    let windowSum = 0;
    let start, end;

    if (k > 0) {
        start = 1;
        end = k;
    } else {
        start = n + k;
        end = n - 1;
        k = -k;
    }
    for (let i = start; i <= end; i++) {
        windowSum += code[i % n];
    }


    for (let i = 0; i < n; i++) {
        result[i] = windowSum;

        windowSum -= code[(start + i) % n];
        windowSum += code[(end + i + 1) % n];
    }
    return result;
};