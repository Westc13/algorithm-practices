/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
    let count = 0;
    for (let word of words) {
        if (word === s.slice(0, word.length)) {
            count++;
        }
    }
    return count;
};