/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function(s) {
    let current = 0;
    let maxChairs = 0;
    for (let ch of s) {
        if (ch === 'E') {
            current ++;
            maxChairs = Math.max(maxChairs, current);
        } else {
            current --;
        }
    }
    return maxChairs;
};