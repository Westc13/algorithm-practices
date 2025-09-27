/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let res = 0;
    let n = mat.length;

    for (let i = 0; i < n; i++){
        res += mat[i][i];
        if (i !== n - 1 - i){
            res += mat[i][n - 1 - i];
        }
    }
    return res
};