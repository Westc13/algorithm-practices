/**
 * @param {number[]} cost
 * @return {number[]}
 */
var minCosts = function(cost) {
    const ans = [];
    let minCost = Infinity;
    for (let i = 0; i < cost.length; i++){
        minCost = Math.min(minCost, cost[i]);
        ans.push(minCost);
    }
    return ans;
};