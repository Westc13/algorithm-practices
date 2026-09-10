/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    /* const result = [];
    for (let i = 0; i < arr.length; i++) {
        let max = -1;

        for (let j = i + 1; j < arr.length; j++) {
            max = Math.max(max, arr[j]);
        }
        result.push(max);
    }
    return result; */

    let maxSoFar = -1;

    for (let i = arr.length - 1; i >= 0; i--) {
        let current = arr[i];
        arr[i] = maxSoFar;
        maxSoFar = Math.max(maxSoFar, current);
    }
    return arr;
};