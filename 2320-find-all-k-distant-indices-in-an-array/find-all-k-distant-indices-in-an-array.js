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

    /* const result = new Set();

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] === key) {
            const left = Math.max(0, j - k);
            const right = Math.min(nums.length - 1, j + k);

            for (let i = left; i <= right; i++) {
                result.add(i);
            }
        }
    }
    return Array.from(result).sort((a, b) => a - b); */

    /* const result = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = Math.max(0, i - k); j <= Math.min(nums.length - 1, i + k); j++) {
            if (nums[j] === key) {
                result.push(i);
                break;
            }
        }
    }
    return result; */

    const intervals = [];

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] === key) {
            let left = Math.max(0, j - k);
            let right = Math.min(nums.length - 1, j + k);
            intervals.push([left, right]);
        }
    }

    const merged = [];
    for (let interval of intervals) {
        if (merged.length === 0 || merged[merged.length - 1][1] < interval[0]) {
            merged.push(interval);
        } else {
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], interval[1])
        }
    }
    
    const result = [];
    for (let [start, end] of merged) {
        for (let i = start; i <= end; i++) {
            result.push(i);
        }
    }
    return result;
};