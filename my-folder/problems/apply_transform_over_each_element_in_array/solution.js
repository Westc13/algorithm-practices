/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    if (arr==null){
        return null
    }
    return arr.map((each, index)=>fn(each, index))
};