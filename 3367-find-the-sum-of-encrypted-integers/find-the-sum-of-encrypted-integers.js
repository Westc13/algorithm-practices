/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function(nums) {
    /* function encrypt(num) {
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
    return sum; */

    function encrypt(num) {
        let maxDigit = 0;
        let temp = num;

        while (temp > 0) {
            maxDigit = Math.max(maxDigit, temp % 10);
            temp = Math.floor(temp / 10);
        }

        let encrypted = 0;
        temp = num;

        while (temp > 0) {
            encrypted = encrypted * 10 + maxDigit;
            temp = Math.floor(temp / 10);
        }
        return encrypted;
    }

    let sum = 0;
    for (const num of nums) {
        sum += encrypt(num);
    }
    return sum;
};