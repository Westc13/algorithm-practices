/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    let maxLength = 1;
    const increasing = function(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] >= arr[i + 1]) {
                return false;
            }
        }
        return true;
    }

    const decreasing = function(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] <= arr[i + 1]) {
                return false;
            }
        }
        return true;
    }

    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            const subArr = [];
            for (let k= i; k < j + 1; k++) {
                subArr.push(nums[k]);
            }
            if (decreasing(subArr) || increasing(subArr)) {
                maxLength = Math.max(subArr.length, maxLength)
            }
        }
    }
    return maxLength;
};