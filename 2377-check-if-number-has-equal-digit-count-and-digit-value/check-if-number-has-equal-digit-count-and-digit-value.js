/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
    const freq = {};
    for (const digit of num) {
        freq[digit] = (freq[digit] || 0) + 1;
    }

    for (let i = 0; i < num.length; i++) {
        if (Number(num[i]) !== (freq[i] || 0)) {
            return false;
        }
    }
    return true;
        
};