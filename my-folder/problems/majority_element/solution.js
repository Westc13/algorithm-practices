/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if(nums.length === 1){
        return nums[0];
    }
    let counts = {};
    let majorityCount = Math.floor(nums.length/2);
    let result = [];

    for (let i=0; i< nums.length; i++){
        if(counts[nums[i]]){
            counts[nums[i]]++;
        }
        else{
            counts[nums[i]] = 1;
        }

        if (counts[nums[i]] > majorityCount && result.indexOf(nums[i]) === -1){
            result.push(nums[i])
        }
    }
    if (result.length === 0){
        return null;
    }
    else if (result.length === 1){
        return result[0]
    }
    else {
        return result;
    }
};