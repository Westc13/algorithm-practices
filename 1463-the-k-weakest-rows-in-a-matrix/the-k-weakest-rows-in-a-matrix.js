/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    const rows = [];
    const result = [];
    for (let i = 0; i < mat.length; i++) {
        let soldiers = 0;

        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] === 1) {
                soldiers++;
            }
        }
        rows.push([soldiers, i])
    }
    rows.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        }
        return a[1] - b[1];
    });
    for (let i = 0; i < k; i++) {
        result.push(rows[i][1]);
    }
    return result;
};