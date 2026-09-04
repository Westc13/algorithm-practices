/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let count = 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 1) {
                let rowValid = true;
                let colValid = true;

                for (let col = 0; col < mat[i].length; col++) {
                    if (col !== j && mat[i][col] === 1) {
                        rowValid = false;
                    }
                }

                for (let row = 0; row < mat.length; row++) {
                    if (row !== i && mat[row][j] === 1) {
                        colValid = false;
                    }
                }
                if (rowValid && colValid) {
                    count++;
                }
            }
        }
    }
    return count;
};