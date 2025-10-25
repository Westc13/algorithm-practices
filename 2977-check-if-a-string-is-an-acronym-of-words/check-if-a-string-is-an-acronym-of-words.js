/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    let acronym = '';
    for (let word of words) {
        acronym += (word[0]);
    }
    if (acronym !== s) {
        return false;
    } else {return true}
};