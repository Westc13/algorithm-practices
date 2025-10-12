/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    /* const transformations = new Set();
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

    for (let word of words){
        let transformation = '';
        for (let ch of word){
            transformation += morse[ch.charCodeAt(0) - 97];
        }
        transformations.add(transformation)
    }
    return transformations.size */

    const mapping = {
        'a': ".-",  'b': "-...", 'c': "-.-.", 'd': "-..",
        'e': ".",   'f': "..-.", 'g': "--.",  'h': "....",
        'i': "..",  'j': ".---", 'k': "-.-",  'l': ".-..",
        'm': "--",  'n': "-.",   'o': "---",  'p': ".--.",
        'q': "--.-",'r': ".-.",  's': "...",  't': "-",
        'u': "..-", 'v': "...-", 'w': ".--",  'x': "-..-",
        'y': "-.--",'z': "--.."
    };

    const transformations = new Set();

    for (let word of words){
        let transformation = '';
        for (let ch of word){
            transformation += mapping[ch];
        }
        transformations.add(transformation);
    }
    return transformations.size;
};