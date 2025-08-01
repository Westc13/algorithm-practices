/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    const arr = [];
    for (let i = 0; i < n; i++){
        arr.push(start + 2 * i)
    }
    let res = arr[0];
    for (let i = 1; i < arr.length; i++){
        res = res ^ arr[i]
    }
    return res
};