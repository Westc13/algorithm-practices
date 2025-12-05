/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let singles = 0;
    let doubles = 0;
    for (let num of nums) {
        if (num.toString().length === 1) {
            singles += num;
        }
        else doubles += num;
    }
    return singles !== doubles;
};