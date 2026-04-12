/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    /* let prev = '';
    while (s !== prev) {
        prev = s;
        s = s.split('AB').join('').split('CD').join('');
    }
    return s.length; */

    let prev;

    do {
        prev = s;
        s = s.split('AB').join('').split('CD').join('');
    } while (s !== prev);

    return s.length;
};