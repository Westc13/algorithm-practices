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

    /* let count = 0;
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
    return count; */

    let count = 0;

    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    for (let m = 2; m * m <= n; m++) {
        for (let n2 = 1; n2 < m; n2++) {

            if (gcd(m, n2) !== 1) continue;
            if ((m - n2) %2 === 0) continue;
            let a = m * m - n2 * n2;
            let b = 2 * m * n2;
            let c = m * m + n2 * n2;

            if (c > n) break;

            let k = 1;
            while (k * c <= n) {
                let A = k * a;
                let B = k * b;

                if (A <= n && B <= n) {
                    count += 2;
                }
                k++;
            }
        }
    }
    return count;
};