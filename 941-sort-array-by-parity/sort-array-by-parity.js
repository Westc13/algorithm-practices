/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    const result = [];
    for (let num of nums) {
        if (num % 2 !== 1) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }
    return result;
};