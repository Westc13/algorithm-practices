/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let idx = word.indexOf(ch);
    if (idx === -1) return word;
    let firstPart = word.slice(0, idx + 1).split('').reverse().join('');
    let secondPart = word.slice(idx + 1);
    return firstPart + secondPart
};