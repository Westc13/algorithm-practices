/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    /* let count = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i-1]) {
            const needed = nums[i-1] + 1 - nums[i]
            count += needed;
            nums[i] += needed;
        }
    }
    return count; */

    if (nums.length <= 1) return 0;
    let count = 0;
    let prev = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > prev) {
            prev = nums[i];
        } else {
            prev = prev + 1;
            count += prev - nums[i]
        }
    }
    return count;
};