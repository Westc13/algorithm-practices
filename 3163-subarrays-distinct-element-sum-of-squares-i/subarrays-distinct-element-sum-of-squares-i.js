/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
        const subArr = new Set();
        for (let j = i; j < nums.length; j++) {
            subArr.add(nums[j]);
            const d = subArr.size;
            ans += d * d;
        }
    }
    return ans;
};