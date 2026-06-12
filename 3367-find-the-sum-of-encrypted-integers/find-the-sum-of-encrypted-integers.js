/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function(nums) {
    function encrypt(num) {
        const digits = String(num);
        let maxDigit = 0;

        for (const digit of digits) {
            maxDigit = Math.max(maxDigit, Number(digit));
        }

        return Number(String(maxDigit).repeat(digits.length));
    }

    let sum = 0;

    for (const num of nums) {
        sum += encrypt(num);
    }
    return sum;
};