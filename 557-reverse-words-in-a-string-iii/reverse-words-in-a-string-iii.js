/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const words = s.split(' ');
    const wordsReversed = words.map((word) => word.split('').reverse().join(''));
    return wordsReversed.join(' ')
};