/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    const freq = {};
    let result = 0;
    
    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1;
        if (freq[num] === nums.length / 2) {
            result = num;
        }
    }

return result;
};