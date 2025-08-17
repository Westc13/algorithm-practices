/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    const res = [];
    for (let i = 0; i < nums.length; i += 2){
        let freq = nums[i];
        let val = nums[i + 1];
         for (let j = 0; j < freq; j++){
            res.push(val);
         }
    }
    return res
};