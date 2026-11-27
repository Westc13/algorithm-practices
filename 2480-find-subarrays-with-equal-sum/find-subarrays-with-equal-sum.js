/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function(nums) {
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            sum1 = nums[i] + nums[i + 1];
            sum2 = nums[j] + nums[j + 1];
            if (sum1 === sum2) {
                return true;
            }
        }
    }
    return false;
};