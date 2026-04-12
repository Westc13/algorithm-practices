/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    let prev = '';
    while (s !== prev) {
        prev = s;
        s = s.split('AB').join('').split('CD').join('');
    }
    return s.length;
};