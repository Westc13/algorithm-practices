/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    let result = -1;
    const words = sentence.split(' ');
    console.log(words);
    for (let i = 0; i < words.length; i++) {
        if (words[i].startsWith(searchWord)) {
            result = i + 1;
            break;
        }
    }
    return result;
};