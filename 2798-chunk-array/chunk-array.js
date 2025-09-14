/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const res = [];
    for (let i = 0; i < arr.length; i += size){
        let chunk = arr.slice(i, i + size);
        res.push(chunk);
    }
    return res
};
