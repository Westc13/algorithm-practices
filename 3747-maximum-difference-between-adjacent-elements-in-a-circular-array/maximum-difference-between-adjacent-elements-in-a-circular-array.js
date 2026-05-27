/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {
    let result = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        let next = (i + 1) % nums.length;
        result = Math.max(result, Math.abs(nums[i] - nums[next]));
    }
    return result;
};