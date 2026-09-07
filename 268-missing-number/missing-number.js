/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const range = [...Array(nums.length + 1).keys()];
    let result = 0;
    for (let num of range) {
        if (!nums.includes(num)) {
            result = num;
            break;
        }
    }
    return result;
};