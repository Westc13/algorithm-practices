/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    const result = [];
    const evens = [];
    const odds = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            evens.push(nums[i])
        } else {
            odds.push(nums[i])
        }
    }
    for (let i = 0; i < evens.length; i++) {
        result.push(evens[i]);
        result.push(odds[i]);
    }
    return result;
};