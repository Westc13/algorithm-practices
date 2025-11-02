/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function(nums1, nums2) {
    const nums1Sorted = nums1.sort((a,b) => a - b);
    const nums2Sorted = nums2.sort((a,b) => a - b);
    return (nums2Sorted[0] - nums1Sorted[0]);
};