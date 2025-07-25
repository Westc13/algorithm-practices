/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const n = nums.length;
    const ans = new Array(n).fill(0);
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            if (nums[j] < nums[i] && j !== i){
                ans[i] += 1
            }
        }
    }
    return ans
};