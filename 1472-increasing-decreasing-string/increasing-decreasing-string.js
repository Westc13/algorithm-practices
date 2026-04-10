/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    let chars = s.split('');
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
    return result.join('');
};