/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    let maxDis = 0;
    for (let i = 0; i < colors.length - 1; i++) {
        for (let j = colors.length - 1; j > 0; j--) {
            if (colors[i] === colors[j]) {
                continue
            } else {
                maxDis = Math.max(maxDis, Math.abs(i - j));
            }
        }
    }
    return maxDis;
};