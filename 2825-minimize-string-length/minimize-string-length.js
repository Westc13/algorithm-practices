/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function(s) {
    const uniqueLetters = [...new Set(s)].join("");
    return uniqueLetters.length;
};