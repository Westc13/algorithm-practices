/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    const newNums = nums.sort((a,b) => b - a);
    return (newNums[0] - 1) * (newNums[1] - 1)
};