/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    const counts = {};
    for (const char of s) {
        counts[char] = (counts[char] || 0) + 1;
    }
    const freqs = Object.values(counts);
    const allSame = freqs.every(val => val === freqs[0]);
    return allSame;
};