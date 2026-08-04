/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    const freq1 = words1.reduce((accu, curr) => (accu[curr] = (accu[curr] || 0) + 1, accu), {});
    const freq2 = words2.reduce((accu, curr) => (accu[curr] = (accu[curr] || 0) + 1, accu), {});
    let result = 0;
    for (const word of Object.keys(freq1)) {
        if (freq1[word] === 1 && freq2[word] === 1) {
            result++;
        }
    }
    return result;
};