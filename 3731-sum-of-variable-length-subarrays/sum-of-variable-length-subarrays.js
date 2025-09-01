/**
 * @param {number[]} nums
 * @return {number}
 */
var subarraySum = function(nums) {
    /*let res = 0;
    const subArr = [];
    for (let i = 0; i < nums.length; i++){
        let start = Math.max(0, i - nums[i]);
        for (let j = start; j <= i; j++){
            res += nums[j]
        }
    }
    return res */

    let n = nums.length;
    let prefix = new Array(n).fill(0);

    prefix[0] = nums[0];
    for (let i = 1; i < n; i++){
        prefix[i] = prefix[i - 1] + nums[i];
    }

    let res = 0;
    for (let i = 0; i < n; i++){
        let start = Math.max(0, i - nums[i]);
        let sum = prefix[i] - (start > 0 ? prefix[start-1] : 0);
        res += sum;
    }
    return res;
};