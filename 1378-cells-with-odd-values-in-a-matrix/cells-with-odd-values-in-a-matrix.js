/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
    /* const matrix = [];
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
    return count; */

    const row = new Array(m).fill(0);
    const col = new Array(n).fill(0);

    for (const [r, c] of indices) {
        row[r]++;
        col[c]++;
    }

    let oddRows = 0;
    let oddCols = 0;

    for (let r of row) if (r % 2 === 1) oddRows++;
    for (let c of col) if (c % 2 === 1) oddCols++;

    return oddRows * (n - oddCols) + (m - oddRows) * oddCols;
};