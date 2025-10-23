/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    const words = text.split(' ');
    let count = 0;
    for (let word of words) {
        let canType = true;
        for (let letter of brokenLetters) {

        if (word.includes(letter)) {
            canType = false;
            break;
        }
        }
        if (canType) count++;
    }
    return count;
};