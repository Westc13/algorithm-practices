/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    const letters = [];

    for (const char of s) {
        if (char === char.toUpperCase()) {
            if (s.includes(char.toLowerCase())) {
                letters.push(char);
            }
        }
    }
    letters.sort();
    return letters.length > 0 ? letters[letters.length - 1] : '';
};