/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const rowMins = matrix.map(row => Math.min(...row));
    const colMaxs = Array(n).fill(-Infinity);
    for (let j = 0; j < n; j++) {
        for (let i = 0; i < m; i++) {
            colMaxs[j] = Math.max(colMaxs[j], matrix[i][j]);
        }
    }
    const lucky = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === rowMins[i] && matrix[i][j] === colMaxs[j]) {
                lucky.push(matrix[i][j]);
            }
        }
    }
    return lucky;
};