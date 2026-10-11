/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function(nums) {
    const length = nums.length;
    const getCircularIndex = (currentIndex, steps, length) => {
        return ((currentIndex + steps) % length + length) % length;
    };
    const result = [];
    for (let i = 0; i < length; i++) {
        if (nums[i] > 0) {
            result.push(nums[getCircularIndex(i, nums[i], length)]);
        } else if (nums[i] < 0) {
            result.push(nums[getCircularIndex(i, -Math.abs(nums[i]), length)]);
        } else {
            result.push(nums[i])
        }
    }
    return result;
};