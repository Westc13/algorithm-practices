/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let numString = '';
    const ans = [];
    for (let num of nums) {
        numString += String(num)
    }
    const resString = numString.split('');
    for (let str of resString) {
        ans.push(parseInt(str));
    }
    return ans;
};