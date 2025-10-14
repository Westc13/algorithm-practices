/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    /* for (let grid of image){
        for (let i = 0; i < grid.length; i++){
            grid[i] = grid[i] ^ 1;
        }
        grid.reverse()
    }
    return image; */

    for (let grid of image) {
        const n = grid.length;
        for (let i = 0; i < Math.ceil(n / 2); i++) {
            let j = n - i - 1;
            if (i === j) {
                grid[i] = grid[j] ^ 1;
            }
            else {
                const left = grid[i];
                const right = grid[j];
                grid[i] = right ^ 1;
                grid[j] = left ^ 1;
            }
        }
    }
    return image;
};