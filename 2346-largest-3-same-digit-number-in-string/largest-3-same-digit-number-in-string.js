/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let largest = -1;
    for (let i = 0; i < num.length - 2; i++) {
        if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
            const digit = Number(num[i]);

            if (digit > largest) {
                largest = digit;
            }
        }
    }
    if (largest === -1) {
        return '';
    }
    return String(largest).repeat(3);
};