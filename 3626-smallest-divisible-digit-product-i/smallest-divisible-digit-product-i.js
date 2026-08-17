/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function(n, t) {
    while (true) {
        let product = 1;
        for (const digit of String(n).split('')) {
            product *= digit;
        }
        if (product % t === 0) {
            return n;
        }
        else {
            n++;
        }
    }
};