/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    /* const freq = {};
    let result = 0;
    
    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1;
        if (freq[num] === nums.length / 2) {
            result = num;
        }
    }

    return result; */

    for (let k = 1; k <= 3; k++) {
        for (let i = 0; i + k < nums.length; i++) {
            if (nums[i] === nums[i + k]) return nums[i];
        }
    }
};