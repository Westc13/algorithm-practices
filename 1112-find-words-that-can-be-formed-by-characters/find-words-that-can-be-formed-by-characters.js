/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let result = 0;
    for (let word of words) {
        const temp = chars.split('');
        let wordGood = true;
        for (let char of word) {
            if (!temp.includes(char)) {
                wordGood = false;
                break;
            } else {
                temp.splice(temp.indexOf(char), 1);
            }
        }
        if (wordGood === true) {

            result += word.length;
        }
    }
    return result;
};