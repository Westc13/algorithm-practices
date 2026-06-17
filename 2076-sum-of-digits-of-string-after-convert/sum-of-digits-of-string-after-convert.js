/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let digitS = '';

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

    return digitS;
};