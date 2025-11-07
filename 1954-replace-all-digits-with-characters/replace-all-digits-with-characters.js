/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    function shift(c, x) {
        return String.fromCharCode(c.charCodeAt(0) + Number(x))
    };
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            result += s[i];
        } else {
            result += shift(s[i-1], s[i]);
        }
    }
    return result
};