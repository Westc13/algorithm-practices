/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
    const matrix = [];
    for (let i = 0; i < m; i++) {
        matrix.push([]);
        for (let j = 0; j < n; j++) {
            matrix[i].push(0);
        }
    }
    for (let i = 0; i < indices.length; i++){
        const [r, c] = indices[i];
        for (let col = 0; col < n; col++) {
            matrix[r][col]++;
        }
        for (let row = 0; row < m; row++) {
            matrix[row][c]++;
        }
    }

    let count = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] % 2 === 1) {
                count++;
            }
        }
    }
    return count;
};