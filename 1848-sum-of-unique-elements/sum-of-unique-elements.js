/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let res = 0;
    const freq = {};
    nums.forEach(num => {
        freq[num] = (freq[num] || 0) + 1
    })
    
    Object.entries(freq).forEach(([key, value]) => {
        if (value === 1) {
            res += Number(key)
        }
    })

    return res;
};