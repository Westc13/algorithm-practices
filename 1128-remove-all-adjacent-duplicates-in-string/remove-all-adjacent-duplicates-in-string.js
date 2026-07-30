/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let result = [];
    for (let i = 0; i < s.length; i++) {
        if (result.length > 0 && result[result.length - 1] === s[i]) {
            result.pop();
        } else {
            result.push(s[i])
        }
    }
    return result.join('');
};