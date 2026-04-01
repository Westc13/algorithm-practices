/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const numsMap = nums.reduce((num, curr) => {
        num[curr] = (num[curr] || 0) + 1;
        return num;
    }, {});
    for (const [key, value] of Object.entries(numsMap)){
        if (value === 1) {
            return Number(key);
        }
    }
};