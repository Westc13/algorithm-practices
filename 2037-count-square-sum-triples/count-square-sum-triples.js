/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
    /* let count = 0

    for (let a = 1; a <= n; a++) {
        for (let b = 1; b <= n; b++) {
            let c_sqr = a*a + b*b
            let c = Math.floor(Math.sqrt(c_sqr))

            if (c * c === c_sqr && c <= n) {
                count ++
            }
        }
    }
    return count; */

    let count = 0;
    let squares = new Set();
    for (let i = 1; i <= n; i++) {
        squares.add(i * i);
    }
    for (let a = 1; a <= n; a++) {
        for (let b = 1; b <= n; b++) {
            let sum = a * a + b * b;

            if (squares.has(sum)) {
                count++;
            }
        }
    }
    return count;
};