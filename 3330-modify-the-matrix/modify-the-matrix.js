/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function(matrix) {
    /* const answer = matrix;
    for (let i = 0; i < answer.length; i++) {
        for (let j = 0; j < answer[0].length; j++) {
            if (answer[i][j] === - 1) {
                let maxValue = -Infinity;
                for (let k = 0; k < answer.length; k++) {
                    if (answer[k][j] > maxValue) {
                        maxValue = answer[k][j];
                    }
                }
                answer[i][j] = maxValue;
            }
        }
    }
    return answer; */

    const maxValues = new Array(matrix[0].length);
    maxValues.fill(-Infinity);

    for (let j = 0; j < matrix[0].length; j++) {
        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i][j] > maxValues[j]) {
                maxValues[j] = matrix[i][j];
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === -1) {
                matrix[i][j] = maxValues[j];
            }
        }
    }
    return matrix;
};