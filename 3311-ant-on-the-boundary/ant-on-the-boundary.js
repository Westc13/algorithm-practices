/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
    let count = 0;
    let curr = 0;
    for (let num of nums) {
        curr += num;
        if (curr === 0) {
            count++;
        }
    }
    return count;
};