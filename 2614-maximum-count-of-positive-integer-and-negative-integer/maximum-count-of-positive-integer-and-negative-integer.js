/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let maxPos = 0;
    let maxNeg = 0;
    for (let num of nums) {
        if (num > 0) {
            maxPos++;
        } else if (num < 0) {
            maxNeg++;
        }
    }
    return Math.max(maxPos, maxNeg);
};