/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
    const costSorted = cost.sort((a, b) => b - a);
    let finalCost = 0;
    for (let i = 0; i < costSorted.length; i++) {
        if ((i + 1) % 3 !== 0) {
            finalCost += costSorted[i];
        }
    }
    return finalCost;
};