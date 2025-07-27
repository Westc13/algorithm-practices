/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    const numsSum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let ans = numsSum % k
    return ans
};