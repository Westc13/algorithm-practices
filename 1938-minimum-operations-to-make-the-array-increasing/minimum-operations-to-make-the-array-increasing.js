/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let count = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i-1]) {
            const needed = nums[i-1] + 1 - nums[i]
            count += needed;
            nums[i] += needed;
        }
    }
    return count;
};