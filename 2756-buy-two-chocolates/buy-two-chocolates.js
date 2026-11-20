/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    const pricesSorted = prices.sort((a, b) => a - b);
    if (pricesSorted[0] + pricesSorted[1] > money) {
        return money;
    }
    return money - (pricesSorted[0] + pricesSorted[1]);
};