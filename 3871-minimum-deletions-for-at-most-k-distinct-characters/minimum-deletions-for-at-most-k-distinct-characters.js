/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minDeletion = function(s, k) {
    const freq = {};
    let result = 0;
    for (const char of s) {
        freq[char] = (freq[char] || 0) + 1;
        }
    const frequencies = Object.values(freq);
    frequencies.sort((a, b) => a - b);
    while (frequencies.length > k) {
        result += frequencies[0];
        frequencies.shift();
    }
    return result;
};