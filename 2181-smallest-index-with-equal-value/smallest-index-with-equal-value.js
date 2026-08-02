/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function(nums) {
    let result;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === i % 10) {
            result = i;
            break;
        } else {
            result = -1;
        }
    }
    return result;
};