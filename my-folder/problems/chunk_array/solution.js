/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    let result = []
    while(arr.length > 0){
        subarr = arr.splice(0, size);
        result.push(subarr)               
    }
    return result
};