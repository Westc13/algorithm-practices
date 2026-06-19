/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    /* let digitS = '';

    for (const char of s) {
        digitS += char.charCodeAt(0) - 96;
    }

    function sumDigits(digitS) {
        return digitS.split('').reduce((sum, digit) => sum + Number(digit), 0);
    }

    while (k > 0) {
        digitS = sumDigits(String(digitS));
        k--;
    }

    return digitS; */

   let num = 0;

    for (const char of s) {
        let value = char.charCodeAt(0) - 96;

        while (value > 0) {
            num += value % 10;
            value = Math.floor(value / 10);
        }
    }

    k--;

    while (k > 0) {
        let sum = 0;

        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }

        num = sum;
        k--;
    }

    return num;
};