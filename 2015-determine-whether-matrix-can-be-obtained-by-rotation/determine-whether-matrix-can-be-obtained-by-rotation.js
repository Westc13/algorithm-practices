/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function(mat, target) {
    let current = mat;
    let count = 0;
    const comparison = function (current, target) {
        if (current.length === target.length && current.every((row, i) => row.every((val, j) => val === target[i][j]))) {
            return true;
        }
        return false;
    }
    while (count < 4) {
        if (comparison(current, target)) {
            return true;
        } else {
            const rotated = [];
            for (let i = 0; i < mat.length; i++) {
                rotated.push(new Array(mat.length).fill(0));
            }
            for (let row = 0; row < mat.length; row++) {
                for (let col = 0; col < mat.length; col++) {
                    rotated[col][mat.length - 1 - row] = current[row][col]
                }
            }
            current = rotated;
        }
        count++;
    }
    return false;
};