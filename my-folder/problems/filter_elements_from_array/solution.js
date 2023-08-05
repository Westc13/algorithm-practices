/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const filteredArr = [];
    for (let i = 0; i< arr.length; i++){
        const element = arr[i];
        const result = fn(element, i)
        if (result) {
            filteredArr.push(element)
        }
    }
    return filteredArr
};