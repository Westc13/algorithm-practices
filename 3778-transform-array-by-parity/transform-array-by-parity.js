/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
    const ans = [] 
    for (let i = 0; i < nums.length; i ++){
        if (nums[i] % 2 === 0){
            ans.push(0);
        }
        else{
            ans.push(1);
        }
    }
    return ans.sort()
};