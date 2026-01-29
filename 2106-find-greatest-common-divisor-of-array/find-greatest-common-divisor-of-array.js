/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    const smallest = Math.min(...nums);
    const largest = Math.max(...nums);
    const commons = []
    for (let i = 1; i <= smallest; i++) {
        if (smallest % i === 0 && largest % i === 0) {
            commons.push(i);
        }
    }
    return Math.max(...commons);
};