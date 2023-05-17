/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morseCodeMap = generateMorseCodeMap();
    const uniquePatterns = new Set();
    for (let word of words){
        let morseCode = '';
        for(let char of word){
            morseCode += morseCodeMap[char];
        }
        uniquePatterns.add(morseCode);
    }
    return uniquePatterns.size;
}
function generateMorseCodeMap(){

    const morseCodeArray = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const morseCodeMap = {};

    for (let i = 0; i<26; i++){
        const letter = lowercaseLetters[i];
        morseCodeMap[letter]= morseCodeArray[i];
    }
    return morseCodeMap;
};