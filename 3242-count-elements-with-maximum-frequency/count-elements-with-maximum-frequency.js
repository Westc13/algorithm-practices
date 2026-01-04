/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    /* const freq = nums.reduce((accu, curr) => {accu[curr] = (accu[curr] || 0) + 1;
    return accu;}, {});

    const maxFreq = Math.max(...Object.values(freq));
    
    let total = 0;
    for (let count of Object.values(freq)) {
        if (count === maxFreq) {
            total += count;
        }
    }
    return total; */

    const freq = {};

    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }

    let maxFreq = 0;
    for (let key in freq) {
        if (freq[key] > maxFreq) {
            maxFreq = freq[key];
        }
    }

    let total = 0;
    for (let key in freq) {
        if (freq[key] === maxFreq) {
            total += freq[key];
        }
    }
    return total;
};