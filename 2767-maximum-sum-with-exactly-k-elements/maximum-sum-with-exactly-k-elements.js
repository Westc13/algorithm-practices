/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    let res = 0;
    let max = Math.max(...nums)
    for (let i = 0; i < k; i++) {
        res += max;
        max += 1;
    }
    return res;
};