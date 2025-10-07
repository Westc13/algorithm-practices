/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    /* const res = [];
    for (let i = 0; i < prices.length; i++){
        let found = false;
        for (let j = i + 1; j < prices.length; j++){
            if (prices[j] <= prices[i]){
                res.push(prices[i]-prices[j]);
                found = true;
                break;
            }
        }
        if (!found) res.push(prices[i]);
    }
    return res */

    const res = prices.slice();
    const stack = [];

    for (let i = 0; i < prices.length; i++){
        while (stack.length > 0 && prices[i] <= prices[stack[stack.length - 1]]) {
            const idx = stack.pop();
            res[idx] = prices[idx] - prices[i]
        }
        stack.push(i);
    }
    return res;
};