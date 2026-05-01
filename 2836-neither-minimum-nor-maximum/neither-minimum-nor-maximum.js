/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    const numsSorted = nums.sort((a, b) => a - b);
    if (numsSorted.length > 2) {
        return numsSorted[1];
    } return -1;
};