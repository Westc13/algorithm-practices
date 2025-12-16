/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    const numsMap = nums.reduce((accumulator, currentValue) => {
        accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
        return accumulator;
    }, {});

    nums.sort((a, b) => {
        if (numsMap[a] !== numsMap[b]) {
            return numsMap[a] - numsMap[b];
        }
        return b - a;
    })
    return nums;
};