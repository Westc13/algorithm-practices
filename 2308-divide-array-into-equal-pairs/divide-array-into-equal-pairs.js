/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    const freq = {};
    nums.forEach(num => {
        freq[num] = (freq[num] || 0) + 1;
    });
    
    for (let value of Object.values(freq)) {
        if (value % 2 === 1) {
            return false;
        }
    }
    return true;

};