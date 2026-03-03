/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    let result = 0;

    for (let num = left; num <= right; num++) {
        let binary = num.toString(2);

        let count = 0;
        for (let char of binary) {
            if (char === '1') {
                count ++;
            }
        }

        if (isPrime(count)) {
            result ++
        }
    }

    return result;

    function isPrime(n) {
        if (n <= 1) return false;
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
};