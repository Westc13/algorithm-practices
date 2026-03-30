/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    /* const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const set3 = new Set(nums3);
    const result = new Set();

    for (let num of set1) {
        if (set2.has(num) || set3.has(num)) {
            result.add(num);
        }
    }

    for (let num of set2) {
        if (set1.has(num) || set3.has(num)) {
            result.add(num);
        }
    }
    return [...result]; */

    const sets = [new Set(nums1), new Set(nums2), new Set(nums3)];
    const countMap = new Map();

    for (let s of sets) {
        for (let num of s) {
            countMap.set(num, (countMap.get(num) || 0) + 1);
        }
    }
    const result = [];
    for (let [num, count] of countMap) {
        if (count >= 2) {
            result.push(num);
        }
    }
    return result;
};