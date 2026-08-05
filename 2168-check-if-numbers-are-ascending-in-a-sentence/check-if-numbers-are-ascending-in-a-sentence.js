/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    const numStr = s.match(/\d+/g);
    const numbers = numStr.map(Number);
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] >= numbers[i + 1]) {
            return false;
        }
    }
    return true;
};