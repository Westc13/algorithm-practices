/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKOr = function(nums, k) {
    let result = 0;

    for (let bit = 0; bit < 31; bit++) {
        let count = 0;
        for (const num of nums) {
            if ((num >> bit) & 1) {
                count += 1;
            }
        }
        if (count >= k) {
            result |= (1 << bit);

        }
    }
    return result;
};