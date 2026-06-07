/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const freq = {};

    for (const num of arr1) {
        freq[num] = (freq[num] || 0) + 1;
    }

    const result = [];

    for (const num of arr2) {
        while (freq[num] > 0) {
            result.push(num);
            freq[num]--;
        }
    }
    const remaining = [];

    for (const key in freq) {
        while (freq[key] > 0) {
            remaining.push(Number(key));
            freq[key]--;
        }
    }
    remaining.sort((a, b) => a - b);
    return result.concat(remaining);
};