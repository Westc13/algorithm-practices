/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    /* let chars = s.split('');
    let result = [];

    while (chars.length > 0) {
        chars.sort();

        let last = null;
        let usedIndices = new Set();

        for (let i = 0; i < chars.length; i++) {
            if (usedIndices.has(i)) continue;

            if (last === null || chars[i] > last) {
                result.push(chars[i]);
                last = chars[i];
                usedIndices.add(i);
            }
        }
        chars = chars.filter((_, i) => !usedIndices.has(i));

        if (chars.length === 0) break;

        chars.sort((a, b) => b.localeCompare(a));

        last = null;
        usedIndices = new Set();

        for (let i = 0; i < chars.length; i++) {
            if (usedIndices.has(i)) continue;

            if (last === null || chars[i] < last) {
                result.push(chars[i]);
                last = chars[i];
                usedIndices.add(i);
            }        
        }
        chars = chars.filter((_, i) => !usedIndices.has(i));
    }
    return result.join(''); */

    let freq = new Array(26).fill(0);

    for (let char of s) {
        freq[char.charCodeAt(0) - 97]++;
    }
    let result = [];

    while (result.length < s.length) {
        for (let i = 0; i < 26; i++) {
            if (freq[i] > 0) {
                result.push(String.fromCharCode(i + 97));
                freq[i]--;
            }
        }
        for (let i = 25; i >= 0; i--) {
            if (freq[i] > 0) {
                result.push(String.fromCharCode(i + 97));
                freq[i]--;
            }
        }
    }

    return result.join('');
};