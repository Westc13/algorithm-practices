/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const result = [];
    for (let num of nums) {
        num = num * num;
        result.push(num)
    }
    return result.sort((a, b) => a - b);
};