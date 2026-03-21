/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    const result = [];
    const numsSorted = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (numsSorted[i] === target) {
            result.push(i);
        }
    }
    return result;
};