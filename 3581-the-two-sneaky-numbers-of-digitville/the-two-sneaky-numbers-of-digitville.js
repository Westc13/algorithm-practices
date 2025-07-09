/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    const ans = [];
    const freq = new Map();
    nums.forEach(item => {
        freq.set(item, (freq.get(item) || 0) + 1);
    });
    for (let [key, value] of freq){
        if (value === 2){
            ans.push(key)
        }
    }
    return ans
};