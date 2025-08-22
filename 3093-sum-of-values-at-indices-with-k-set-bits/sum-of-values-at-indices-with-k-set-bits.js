/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
    let  res = 0;
    for (let i = 0; i < nums.length; i++){
        let binary = i.toString(2);
        let ones = [...binary].filter(ch => ch === '1').length;
        if (ones === k){
            res += nums[i];
        }
    }
    return res;
};