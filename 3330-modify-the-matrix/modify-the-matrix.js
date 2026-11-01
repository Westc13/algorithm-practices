/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function(matrix) {
    const answer = matrix;
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
    return answer;
};