/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    /* const freq = {};
    for (const num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }
    const counts = new Set();
    for (const value of Object.values(freq)) {
        if (counts.has(value)) {
            return false;
        } else {
            counts.add(value);
        }
    }
    return true; */

    const freq = {};
    for (const num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }
    const values = Object.values(freq);
    return values.length === new Set(values).size;
};