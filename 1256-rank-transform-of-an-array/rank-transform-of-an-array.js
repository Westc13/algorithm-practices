/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    const sorted = [...arr].sort((a, b) => a - b);
    const ranks = new Map();
    let rank = 1;

    for (const num of sorted) {
        if (!ranks.has(num)) {
            ranks.set(num, rank);
            rank++
        }
    }
    return arr.map(num => ranks.get(num));
};