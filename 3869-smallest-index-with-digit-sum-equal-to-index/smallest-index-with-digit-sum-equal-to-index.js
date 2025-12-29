/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
    /* let smallestIdx = Infinity;
    for (let i = 0; i < nums.length; i++) {
        let tempNum = nums[i];
        let numSum = 0;
        while (tempNum > 0) {
            numSum += tempNum % 10;
            tempNum = Math.floor(tempNum / 10);
        }
        if (numSum === i) {
            smallestIdx = i;
            break;
        }
    }
    return smallestIdx === Infinity ? -1 : smallestIdx; */
    
    let smallestIdx = Infinity;
    for (let i = 0; i < nums.length; i++) {
        const digits = nums[i].toString().split('').map(Number);
        const numSum = digits.reduce((accu, curr) => accu + curr, 0);
        if (numSum === i) {
            smallestIdx = i;
            break;
        }
    }
    return smallestIdx === Infinity ? -1 : smallestIdx;
};