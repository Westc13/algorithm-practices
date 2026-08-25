/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    let odd = 0;
    let even = 0;
    for (const pos of position) {
        if (pos % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }
    return Math.min(odd, even);
};