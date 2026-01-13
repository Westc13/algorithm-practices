/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    const result = [];
    for (let ch of s) {
        if (ch === 'i') {
            result.reverse();
        }
        else {
            result.push(ch);
        }
    }
    return result.join('');
};