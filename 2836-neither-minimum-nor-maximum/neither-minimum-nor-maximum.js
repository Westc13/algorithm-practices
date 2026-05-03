/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    /* const numsSorted = nums.sort((a, b) => a - b);
    if (numsSorted.length > 2) {
        return numsSorted[1];
    } return -1; */

    /* const minVal = Math.min(...nums);
    const maxVal = Math.max(...nums);
    const newNums = nums.filter(val => val !== minVal && val !== maxVal);
    const resultIdx = Math.floor(Math.random() * newNums.length);
    return newNums.length > 0 ? newNums[resultIdx] : -1; */

    if (nums.length <= 2) return -1;
    let max = nums[0];
    let min = nums[0];
    const result = [];
    for (let num of nums) {
        if (num > max) {
            max = num;
        } 
        if (num < min) {
            min = num;
        } 
    }

    for (let num of nums) {
        if (num !== min && num !== max) {
            return num;
        }
    }
    return -1;
};