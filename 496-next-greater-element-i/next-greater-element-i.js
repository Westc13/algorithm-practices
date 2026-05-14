/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    /* const result = [];

    for (let i = 0; i < nums1.length; i++) {

        let found = false;
        let nextGreater = -1;

        for (let j = 0; j < nums2.length; j++) {

            if (nums2[j] === nums1[i]) {
                found = true;
            }

            else if (found && nums2[j] > nums1[i]) {
                nextGreater = nums2[j];
                break;
            }
        }

        result.push(nextGreater);
    }

    return result; */

    const stack = [];
    const map = new Map();

    for (let num of nums2) {
        while (stack.length && num > stack[stack.length - 1]) {
            let smaller = stack.pop();
            map.set(smaller, num);
        }
        stack.push(num);
    }

    while (stack.length) {
        map.set(stack.pop(), -1);
    }
    const result = [];
    for (let num of nums1) {
        result.push(map.get(num));
    }
    return result;
};