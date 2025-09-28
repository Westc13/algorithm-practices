/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let res = 0;
    let n = mat.length;

    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            if (i === j){
                res += mat[i][j];
            }
            else if (i + j === n - 1){
                res += mat[i][j];
            }
        }
    }
    return res;
    /* let res = 0;
    let n = mat.length;

    for (let i = 0; i < n; i++){
        res += mat[i][i];
        if (i !== n - 1 - i){
            res += mat[i][n - 1 - i];
        }
    }
    return res */
};