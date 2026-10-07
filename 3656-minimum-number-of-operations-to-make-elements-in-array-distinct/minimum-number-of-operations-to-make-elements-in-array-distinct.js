/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let ops = 0;
    while (new Set(nums).size !== nums.length) {
        nums.splice(0, 3);
        ops++
    }
    return ops;
};