/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    const freq = nums.reduce((accu, curr) => {accu[curr] = (accu[curr] || 0) + 1;
    return accu;}, {});

    const maxFreq = Math.max(...Object.values(freq));
    
    let total = 0;
    for (let count of Object.values(freq)) {
        if (count === maxFreq) {
            total += count;
        }
    }
    return total;
};