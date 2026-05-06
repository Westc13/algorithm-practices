/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    const result = [];

    for (let j = 0; j < n; j++) {
        const row = [];
        for (let i = 0; i < m; i++) {
            row.push(matrix[i][j]);
        }
        result.push(row);
    }
    return result;
};