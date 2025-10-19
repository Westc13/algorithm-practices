/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        let j = fn(arr[i]);
        let x = {key: arr[i], val: j};
        res.push(x)
    }
    return res.sort((a,b) => a.val - b.val).map(obj => obj.key);
};