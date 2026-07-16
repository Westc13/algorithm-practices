/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
var areSimilar = function(mat, k) {
    const n = mat[0].length;
    const shift = k % n;
    if (shift === 0) {
        return true;
    }

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < n; j++) {
            let shiftIndex;
            if (i % 2 === 0) {
                shiftIndex = (j + shift) % n;
            } else {
                shiftIndex = (j - shift + n) % n;
            }

            if (mat[i][j] !== mat[i][shiftIndex]) {
                return false
            }
        }
    }
    return true;
};