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

    /* let count = 0;
    for (let i = 0; i <= s.length - 3; i++) {
        let a = s[i];
        let b = s[i + 1];
        let c = s[i + 2];
        if (a !== b && b !== c && c !== a) {
            count++;
        }
    }
    return count; */

    let count = 0;
    let freq = new Map();

    for (let i = 0; i < s.length; i++) {
        freq.set(s[i], (freq.get(s[i]) || 0) + 1);

        if (i >= 3) {
            let leftChar = s[i - 3];
            freq.set(leftChar, freq.get(leftChar) - 1);

            if (freq.get(leftChar) === 0) {
                freq.delete(leftChar);
            }
        }

        if (i >= 2 && freq.size === 3) {
            count++
        }
    }
    return count;
};