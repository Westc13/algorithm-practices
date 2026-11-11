/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    function countChar(str) {
        const freq = {};
        for (let char of str) {
        freq[char] = (freq[char] || 0) + 1
        };
        return freq;
    }
    const freqS = countChar(s);
    const freqT = countChar(t);

    const keysS = Object.keys(freqS);
    const keysT = Object.keys(freqT);

    if (keysS.length !== keysT.length) {
        return false;
    }
    for (const char of keysS) {
        if (freqS[char] !== freqT[char]) {
            return false;
        }
    }
    return true;
};