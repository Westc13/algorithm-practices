/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    /* let res = 0;
    for (num of nums) {
        if (num.toString().length % 2 === 0) {
            res ++;
        }
    }
    return res; */

    let res = 0;
    for (let num of nums) {
        let digits = Math.floor(Math.log10(num)) + 1;
        if (digits % 2 === 0) res++;
    }
    return res;
};