/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    for (let i = 0; i < sortedArr.length - 2; i++) {
        if ((sortedArr[i + 1] - sortedArr[i]) !== (sortedArr[i + 2] - sortedArr[i + 1])) {
            return false;
        }
    }
    return true;
};