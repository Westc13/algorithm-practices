/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    const numsSorted = nums.sort((a, b) => a - b);
    const n = nums.length;
    return (nums[n-1] * nums[n-2]) - (nums[0] * nums[1]);
};