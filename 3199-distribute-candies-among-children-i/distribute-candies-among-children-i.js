/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function(n, limit) {
    /* let count = 0;
    for (let a = 0; a <= limit; a++) {
        for (let b = 0; b <= limit; b++) {
            let c = n - a - b;

            if (c >= 0 && c <= limit) {
                count++;
            }
        }
    }
    return count; */

    let count = 0;
    for (let a = 0; a <= limit; a++) {
        let low = Math.max(0, n - a - limit);
        let high = Math.min(limit, n - a);

        if (low <= high) {
            count += high - low + 1;
        }
    }
    return count;
};