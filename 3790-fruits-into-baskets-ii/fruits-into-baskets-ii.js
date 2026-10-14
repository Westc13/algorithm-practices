/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function(fruits, baskets) {
    for (let i = 0; i < fruits.length; i++) {
        for (let j = 0; j < baskets.length; j++) {
            if (fruits[i] <= baskets[j]) {
                fruits.splice(i, 1);
                baskets.splice(j, 1);
                i--;
                break;
            }
        } 
    }
    return fruits.length;
};