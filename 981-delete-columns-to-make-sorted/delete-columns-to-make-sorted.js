/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let count = 0;
    let rows = strs.length;
    let cols = strs[0].length;

    for (let j = 0; j < cols; j++) {
        for (let i = 0; i < rows - 1; i++) {
            if (strs[i][j] > strs[i+1][j]) {
                count++;
                break;
            }
        }
    }
    return count;
};