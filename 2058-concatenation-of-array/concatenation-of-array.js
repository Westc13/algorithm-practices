/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let ans = [];
    let copiedNums = nums.concat();
    ans = nums.concat(copiedNums);
    return ans
};