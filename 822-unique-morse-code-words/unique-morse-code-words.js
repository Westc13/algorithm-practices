/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const transformations = new Set();
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

    for (let word of words){
        let transformation = '';
        for (let ch of word){
            transformation += morse[ch.charCodeAt(0) - 97];
        }
        transformations.add(transformation)
    }
    return transformations.size
};