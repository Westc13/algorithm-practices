/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    /* let count = 0;
    for (let i = 0; i <= s.length - 3; i++) {
        let subS = s.slice(i, i + 3);
        if (new Set(subS).size === subS.length) {
            count++;
        }
    }
    return count; */

    let count = 0;
    for (let i = 0; i <= s.length - 3; i++) {
        let a = s[i];
        let b = s[i + 1];
        let c = s[i + 2];
        if (a !== b && b !== c && c !== a) {
            count++;
        }
    }
    return count;
};