/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    /* if (n <= 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2); */

    if (n <= 1) {
        return n;
    }
    let prev = 0;
    let curr = 1;

    for (let i = 2; i <= n; i++) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
};