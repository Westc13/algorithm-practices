/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    const result = [];
    for (const char of s) {
        if (result.length >= 2 && result[result.length - 1] === char && result[result.length - 2] === char) {
            continue;
        } else {
            result.push(char);
        }
    }
    return result.join('');
};