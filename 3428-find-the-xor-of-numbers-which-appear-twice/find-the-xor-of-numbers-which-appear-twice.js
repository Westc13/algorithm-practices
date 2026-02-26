/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function(nums) {
    const freq = {};
    for (const num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }
    let result = 0;
    for (const key in freq) {
        if (freq[key] === 2) {
            result ^= Number(key);
        }
    }
    return result;
};