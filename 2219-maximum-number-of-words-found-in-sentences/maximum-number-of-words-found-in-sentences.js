/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let maxWord = 0;
    for (let sentence of sentences){
        let wordCount = sentence.split(' ').length;
        if (wordCount > maxWord){
            maxWord = wordCount
        }
    }
    return maxWord
};