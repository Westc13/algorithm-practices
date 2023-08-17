/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    const mappedArr = arr.map(value =>({value, fnOutput: fn(value)}));
    mappedArr.sort((a, b)=> a.fnOutput - b.fnOutput);
    const sortedArr = mappedArr.map(item => item.value);
    return sortedArr
};