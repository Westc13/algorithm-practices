/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
    let count = 0;
    for (let curr = 1; curr < nums.length - 1; curr++) {
        let left = curr - 1;
        let right = curr + 1;
        while (left >= 0 && nums[left] === nums[curr]) {
            left--;
        }
        while (right < nums.length && nums[right] === nums[curr]) {
            right++;
        }
        if (nums[curr] === nums[curr - 1]) {
            continue;
        }
        if (nums[curr] > nums[left] && nums[curr] > nums[right]) {
            count++;
        }
        if (nums[curr] < nums[left] && nums[curr] < nums[right]) {
            count++;
        }
    }
    return count;
};