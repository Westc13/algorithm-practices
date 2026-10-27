/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfGoodNumbers = function(nums, k) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        let isGood = true;
        if (i - k >= 0 && nums[i] <= nums[i - k]) {
            isGood = false;
        }
        if (i + k < nums.length && nums[i] <= nums[i + k]) {
            isGood = false;
        }
        if (isGood) {
            result += nums[i];
        }
    }
    return result;
};