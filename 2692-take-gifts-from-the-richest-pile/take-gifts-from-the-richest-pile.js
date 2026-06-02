/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {

    while (k > 0) {
        const maxGift = Math.max(...gifts);
        const idx = gifts.indexOf(maxGift);

        gifts[idx] = Math.floor(Math.sqrt(maxGift));
        k--;
    }
    return gifts.reduce((sum, num) => sum + num, 0);
};