/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const res = [];
    for (let i = 0; i < arr.length; i++){
        let newEl = fn(arr[i], i)
        res.push(newEl)
    }
    return res
};