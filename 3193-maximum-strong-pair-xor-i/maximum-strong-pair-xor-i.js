/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function(nums) {
    /* let maxXor = 0;
    for (let x = 0; x < nums.length - 1; x++) {
        for (let y = x + 1; y < nums.length; y++) {
            if (Math.abs(nums[x] - nums[y]) <= Math.min(nums[x], nums[y])) {
                let xor = nums[x] ^ nums[y];
                maxXor = Math.max(maxXor, xor);
            }
        }
    }
    return maxXor; */

    nums.sort((a, b) => a - b);

    let maxXor = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (nums[j] > 2 * nums[i]) {
                break;
            }
            maxXor = Math.max(maxXor, nums[i] ^ nums[j])
        }
    }
    return maxXor;
};