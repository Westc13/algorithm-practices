/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
    while (k > 0){
        let minVal = Math.min(...nums);
        for (let i = 0; i < nums.length; i++){
            if (nums[i] === minVal){
                nums[i] *= multiplier;
                k -= 1;
                break
            }
        }
    }
    return nums
};