/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    let res = '';
    for (word of words){
        let reversed = word.split('').reverse().join('')
        if (word === reversed){
            res = word;
            break;
        } else {
            continue;
        }
    }
    return res
};