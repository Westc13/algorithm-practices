/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    let line = 1;
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        let width = widths[s.charCodeAt(i) - 97];

        if (total + width > 100) {
            line++;
            total = 0
        }
        total += width;
    }
    return [line, total]
};