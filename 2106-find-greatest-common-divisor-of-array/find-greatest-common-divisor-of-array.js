/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    /* const smallest = Math.min(...nums);
    const largest = Math.max(...nums);
    const commons = [];
    for (let i = 1; i <= smallest; i++) {
        if (smallest % i === 0 && largest % i === 0) {
            commons.push(i);
        }
    }
    return Math.max(...commons); */

    /* const largest = Math.max(...nums);
    const smallest = Math.min(...nums);
    let greatestCommon = 1;
    for (let i = 1; i <= smallest; i++) {
        if (smallest % i === 0 && largest % i === 0 && i > greatestCommon) {
            greatestCommon = i;
        }
    }
    return greatestCommon; */

    const numsArr = nums.sort((a, b) => a - b);
    let greatest = 1;
    for (let i = 1; i <= numsArr[0]; i++) {
        if (numsArr[0] % i === 0 && numsArr[numsArr.length - 1] % i === 0 && i > greatest) {
            greatest = i;
        }
    }
    return greatest;
};