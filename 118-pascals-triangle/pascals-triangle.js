/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    
    const triangle = [];

    for (let i = 0; i < numRows; i++) {
        const row = [];
        row.push(1);

        for (let j = 1; j < i; j++) {
            const previousRow = triangle[i - 1];
            row.push(previousRow[j - 1] + previousRow[j]);
        }

        if (i > 0) {
            row.push(1);
        }
        triangle.push(row);
    }

    return triangle;
    
    /* const result = [];

    for (let i = 0; i < numRows; i++) {
        const row = [];

        for (let j = 0; j <= i; j++){
            if (j === 0 || j === i) {
                row.push(1);
            } else {
                const prevRow = result[i - 1];
                row.push(prevRow[j - 1] + prevRow[j]);
            }
        }
        result.push(row);
    }
    return result; */
};