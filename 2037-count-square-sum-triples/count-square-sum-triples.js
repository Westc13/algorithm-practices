/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
    count = 0

    for (let a = 1; a <= n; a++) {
        for (let b = 1; b <= n; b++) {
            let c_sqr = a*a + b*b
            let c = Math.floor(Math.sqrt(c_sqr))

            if (c * c === c_sqr && c <= n) {
                count ++
            }
        }
    }
    return count;
};