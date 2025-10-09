/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    const n = grid.length;
    const total = n * n;
    const freq = new Array(total + 1).fill(0);

    let repeated = -1;

    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            const val = grid[i][j];
            freq[val]++;
            if (freq[val] === 2) repeated = val;
        }
    }

    let missing = -1;
    for (let k = 1; k <= total; k++){
        if (freq[k] === 0){ missing = k; break;}
    }
    return [repeated, missing]
};