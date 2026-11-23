/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function(nums) {
    let minSum = Infinity;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] < nums[j] && nums[k] < nums[j]) {
                    minSum = Math.min(minSum, nums[i] + nums[j] + nums[k])
                }
            }
        }  
    }
    return minSum === Infinity ? -1 : minSum;
};