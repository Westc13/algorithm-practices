/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    /* const result = [];
    for (let num of nums1) {
        if (nums2.includes(num) && !result.includes(num)) {
            result.push(num);
        }
    }
    return result; */

    const set2 = new Set(nums2);
    const result = new Set();

    for (let num of nums1) {
        if (set2.has(num)) {
            result.add(num);
        }
    }
    return [...result];
};