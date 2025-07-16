/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    const n = grid.length;
    const ans = Array(n - 2).fill(0).map(()=>Array(n - 2).fill(0));
    for (let i = 0; i < (n-2); i++){
        for (let j = 0; j < (n-2); j++){
            max_num = Math.max(grid[i][j], grid[i][j+1], grid[i][j+2], grid[i+1][j], grid[i+1][j+1], grid[i+1][j+2], grid[i+2][j], grid[i+2][j+1], grid[i+2][j+2])
            ans[i][j] = max_num;
        }
    }
    return ans
};