/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    /* let res = 0;

    for (let row of grid) {
        row.sort((a, b) => a - b);
    }

    let cols = grid[0].length;
    for (let j = 0; j < cols; j++) {
        let colMax = 0;
        for (let i = 0; i < grid.length; i++) {
            colMax = Math.max(colMax, grid[i][j]);
        }
        res += colMax;
    }
    return res; */

    /* let res = 0;

    while (grid[0].length) {
        let roundMax = 0;

        for (let i = 0; i < grid.length; i++) {
            let maxOfRow = Math.max(...grid[i]);
            let maxIdx = grid[i].indexOf(maxOfRow);

            grid[i].splice(maxIdx, 1);

            roundMax = Math.max(roundMax, maxOfRow);
        }
        res += roundMax;
    }
    return res; */

    let res = 0;

    while (grid[0].length > 0) {
        let roundMax = 0;

        for (let i = 0; i < grid.length; i++) {
            let rowMax = -Infinity;
            let idx = -1;

            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] > rowMax) {
                    rowMax = grid[i][j];
                    idx = j;
                }
            }

            grid[i].splice(idx, 1);

            roundMax = Math.max(roundMax, rowMax);
        }

        res += roundMax
    }

    return res;
};