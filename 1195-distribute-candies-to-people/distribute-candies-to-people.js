/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    const result = new Array(num_people).fill(0);
    let gift = 1;
    while (candies > 0) {
        for (let i = 0; i < num_people; i++) {
            if (candies === 0) {
                break;
            }
            gift = Math.min(gift, candies);
            result[i] += gift;
            candies -= gift;
            gift++;
        }
    }
    return result;
};