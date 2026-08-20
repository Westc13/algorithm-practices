/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    const uniqueNums = [... new Set(nums)];
    let result = 0;
    for (const num of uniqueNums) {
        if (num < k) {
            return -1;
        } else if (num > k) {
            result++;
        }
    }
    return result;
};