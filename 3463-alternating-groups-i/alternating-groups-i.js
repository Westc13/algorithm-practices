/**
 * @param {number[]} colors
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors) {
    let count = 0;
    for (let i = 0; i < colors.length; i++) {
        if (colors[i] !== colors[(i - 1 + colors.length) % colors.length] && colors[i] !== colors[(i + 1) % colors.length]) {
            count++;
        }
    }
    return count;
};