/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    const words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        const current = words[i];
        const next = words[(i + 1) % words.length]
        if (current[current.length - 1] !== next[0]) {
            return false
        }
    }
    return true;
};