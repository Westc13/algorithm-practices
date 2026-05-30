/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const freq = arr.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {})
    let largest = -1;
    for (const [num, count] of Object.entries(freq)) {
        if (Number(num) === count) {
            largest = Math.max(largest, Number(num))
        }
    }
    return largest;
};