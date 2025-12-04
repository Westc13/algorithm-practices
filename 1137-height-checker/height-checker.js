/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    /* let heightsSorted = [...heights].sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heightsSorted[i] !== heights[i]) count ++;
    }
    return count; */

    const count = new Array(101).fill(0);

    for (let h of heights) {
        count[h]++;
    }
    let index = 0;
    let mismatches = 0;

    for (let height = 1; height <= 100; height++) {
        while (count[height] > 0) {
            if (heights[index] !== height) {
                mismatches++;
            }
            index++;
            count[height]--;
        }
    }
    return mismatches;
};