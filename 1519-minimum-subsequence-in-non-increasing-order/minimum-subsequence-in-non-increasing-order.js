/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    let result = [];
    const numsSorted = nums.sort((a, b) => b - a);
    let totalSum = numsSorted.reduce((acc, crr) => acc + crr, 0);
    let currentSum = 0;
    for (let i = 0; i < numsSorted.length; i++) {
        currentSum += numsSorted[i];
        result.push(numsSorted[i]);
        if (currentSum > (totalSum - currentSum)) {
            break;
        }
    }
    return result;
};