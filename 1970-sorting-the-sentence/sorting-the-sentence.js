/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const words = s.split(' ').map(word => {
        return {
            text: word.slice(0, -1),
            index: Number(word.slice(-1))
        };
    });
    return words.sort((a, b) => a.index - b.index).map(item => item.text).join(' ');
    
};