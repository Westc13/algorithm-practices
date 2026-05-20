/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
    let area = 0;
    const n = grid.length;

    for (let row = 0; row < n; row++) {
        let rowMax = 0;
        let colMax = 0;

        for (let col = 0; col < n; col++) {
            if (grid[row][col] > 0) {
                area++;
            }
            rowMax = Math.max(rowMax, grid[row][col]);

            colMax = Math.max(colMax, grid[col][row]);
        }
        area += rowMax + colMax;
    }
    return area;
};