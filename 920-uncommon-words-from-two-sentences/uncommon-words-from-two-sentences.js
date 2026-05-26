/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    /* const result = [];
    const s1Arr = s1.split(' ');
    const s2Arr = s2.split(' ');
    for (let word of s1Arr) {
        if (s1Arr.filter(w => w === word).length === 1 && !s2Arr.includes(word)) {
            result.push(word);
        }
    }
    for (let word of s2Arr) {
        if (s2Arr.filter(w => w === word).length === 1 &&!s1Arr.includes(word)) {
            result.push(word);
        }
    }
    return result; */

    const count = {};
    const words = (s1 + ' ' + s2).split(' ');

    for (let word of words) {
        count[word] = (count[word] || 0) + 1;
    }

    const result = [];

    for (let word in count) {
        if (count[word] === 1) {
            result.push(word);
        }
    }
    return result;
};