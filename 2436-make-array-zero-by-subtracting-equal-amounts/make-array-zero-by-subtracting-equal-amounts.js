/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    const distinct = new Set();

    for (const num of nums) {
        if (num > 0) {
            distinct.add(num);
        }
    }
    return distinct.size;
};