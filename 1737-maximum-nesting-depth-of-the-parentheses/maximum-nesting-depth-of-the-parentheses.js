/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let current = 0;
    let max = 0;
    for (const ch of s) {
        if (ch === '(') {
        current++;
        if (current > max) max = current;
        } else if (ch === ')') {
        current--;
        }
    }
    return max;
};