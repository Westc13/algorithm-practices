/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function(grid) {
    let champion = 0;
    for (let i = 1; i < grid.length; i++) {
        if (grid[i][champion] === 1) {
            champion = i;
        }
    }
    return champion;
};