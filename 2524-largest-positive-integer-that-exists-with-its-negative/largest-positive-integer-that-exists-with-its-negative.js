/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    /* let largest = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == -nums[j]) {
                largest = Math.max(largest, Math.abs(nums[i]));
            }
        }
    }
    return largest === 0 ? -1 : largest; */

    let seen = new Set();
    let largest = -1;

    for (const num of nums) {
        if (seen.has(-num)) {
            largest = Math.max(largest, Math.abs(num));
        }
        seen.add(num);
    }
    return largest;
};