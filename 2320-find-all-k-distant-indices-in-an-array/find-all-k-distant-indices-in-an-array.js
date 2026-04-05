/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function(nums, key, k) {
    /* const result = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] === key && Math.abs(i - j) <= k) {
                result.push(i);
                break;
            }
        }
    }
    return result.sort((a,b) => a - b); */

    const result = new Set();

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] === key) {
            const left = Math.max(0, j - k);
            const right = Math.min(nums.length - 1, j + k);

            for (let i = left; i <= right; i++) {
                result.add(i);
            }
        }
    }
    return Array.from(result).sort((a, b) => a - b);
};