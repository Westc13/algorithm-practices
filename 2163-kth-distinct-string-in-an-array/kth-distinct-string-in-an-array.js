/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    const freq = new Map();
    for (let str of arr) {
        freq.set(str, (freq.get(str) || 0) + 1);
    }

    const distinct = [];
    for (let str of arr) {
        if (freq.get(str) === 1) {
            distinct.push(str);
        }
    }
    return distinct[k - 1] || '';
};