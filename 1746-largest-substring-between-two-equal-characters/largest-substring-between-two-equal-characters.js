/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let maxLength = -1;
    for (let left = 0; left < s.length - 1; left++) {
        for (let right = left + 1; right < s.length; right++) {
            if (s[left] === s[right]) {
                maxLength = Math.max(maxLength, (right - left - 1));
            }
        }
    }
    return maxLength;
};