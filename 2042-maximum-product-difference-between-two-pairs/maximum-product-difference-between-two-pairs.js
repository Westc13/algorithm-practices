/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    /* const numsSorted = nums.sort((a, b) => a - b);
    const n = nums.length;
    return (nums[n-1] * nums[n-2]) - (nums[0] * nums[1]); */

    let max1 = -Infinity, max2 = -Infinity;
    let min1 = Infinity, min2 = Infinity;

    for (const x of nums) {
        if (x > max1) { max2 = max1; max1 = x; }
        else if (x > max2) { max2 = x; }

        if (x < min1) { min2 = min1; min1 = x; }
        else if (x < min2) { min2 = x; }
    }

    return (max1 * max2) - (min1 * min2);
};