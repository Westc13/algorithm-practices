/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    const elToRemove = Math.floor(arr.length / 20);
    let sum = 0;
    const arrSort = arr.sort((a, b) => b - a);
    for (let i = 0 + elToRemove; i < arr.length - elToRemove; i++) {
        sum += arrSort[i];
    }
    return sum / (arr.length - (elToRemove * 2));
};