/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    /* let res = 0;
    const freq = {};
    nums.forEach(num => {
        freq[num] = (freq[num] || 0) + 1
    })
    
    Object.entries(freq).forEach(([key, value]) => {
        if (value === 1) {
            res += Number(key)
        }
    })

    return res; */

    let res = 0;
    const freq = {};

    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1;

        if (freq[num] === 1) res += num;
        else if (freq[num] === 2) res -= num;
    }
    return res;
};