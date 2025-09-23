/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    /* const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let res = true;
    for (let letter of alphabet){
        if (!sentence.includes(letter)){
            res = false;
            break;
        }
    }
    return res; */

    if (sentence.length < 26) {
        return false;
    }
    return new Set(sentence).size === 26;
};