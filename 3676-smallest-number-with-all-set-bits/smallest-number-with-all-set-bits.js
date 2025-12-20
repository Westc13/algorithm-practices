/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function(n) {
    return parseInt(n.toString(2).replace(/0/g, '1'), 2);
};