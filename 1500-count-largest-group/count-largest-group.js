/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    /* const freq = {}
    function digitSum(num) {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return sum
    }
    for (let i = 1; i <= n; i++) {
        const sum = digitSum(i);
        freq[sum] = (freq[sum] || 0) + 1;
    }

    let maxSize = 0;
    for (const key in freq) {
        if (freq[key] > maxSize) {
            maxSize = freq[key];
        }
    }

    let count = 0;
    for (const key in freq) {
        if (freq[key] === maxSize) {
            count++;
        }
    }
    return count; */

    let maxSize = 0;
    let count = 0;
    const freq = {};

    function digitSum(num) {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    for (let i = 1; i <= n; i++) {
        const sum = digitSum(i);

        freq[sum] = (freq[sum] || 0) + 1;

        if (freq[sum] > maxSize) {
            maxSize = freq[sum];
            count = 1;
        } else if (freq[sum] === maxSize) {
            count++;
        }
    }
    return count;
};