/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    for (let grid of image){
        for (let i = 0; i < grid.length; i++){
            grid[i] = grid[i] ^ 1;
        }
        grid.reverse()
    }
    return image;
};