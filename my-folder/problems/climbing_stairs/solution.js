/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let last = 1;
    let next_to_last = 1;
    for (let i = 1; i< n; i++){
    let temp = next_to_last;
        next_to_last = next_to_last + last;
        last = temp;
    }
    return next_to_last;
};