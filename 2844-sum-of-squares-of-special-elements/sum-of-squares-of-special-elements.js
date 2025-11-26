/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    const specials = [];
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        if (n % (i + 1) === 0) {
            specials.push(nums[i]);
        }
    }
    return specials.reduce((accu, curr) => accu + curr * curr, 0);
};