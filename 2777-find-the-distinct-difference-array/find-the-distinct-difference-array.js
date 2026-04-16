/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function(nums) {
    /* const result = [];
    for (let i = 0; i < nums.length; i++) {
        let part1 = [... new Set(nums.slice(0, i + 1))];
        let part2 = [... new Set(nums.slice(i + 1))];
        let diff = part1.length - part2.length;
        result.push(diff)
    }
    return result; */

    const n = nums.length;

    const prefix = new Array(n);
    const suffix = new Array(n);

    let seen = new Set();
    for (let i = 0; i < n; i++) {
        seen.add(nums[i]);
        prefix[i] = seen.size;
    }

    seen = new Set();
    for (let i = n - 1; i >= 0; i--) {
        seen.add(nums[i]);
        suffix[i] = seen.size;
    }

    const result = [];
    for (let i = 0; i < n; i++) {
        const suffixCount = i + 1 < n ? suffix[i + 1] : 0;
        result.push(prefix[i] - suffixCount);
    }

    return result;
};