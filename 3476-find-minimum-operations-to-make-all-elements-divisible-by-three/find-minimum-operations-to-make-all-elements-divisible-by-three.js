/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let ans = 0;
    for (let num of nums){
        let remainder = num % 3;
        ans += Math.min(remainder, 3 - remainder)
    }
    return ans
};