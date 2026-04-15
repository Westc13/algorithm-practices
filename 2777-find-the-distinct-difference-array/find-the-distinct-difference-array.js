/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function(nums) {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        let part1 = [... new Set(nums.slice(0, i + 1))];
        let part2 = [... new Set(nums.slice(i + 1))];
        let diff = part1.length - part2.length;
        result.push(diff)
    }
    return result;
};