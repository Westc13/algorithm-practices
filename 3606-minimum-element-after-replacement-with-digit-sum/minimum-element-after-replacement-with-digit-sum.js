/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    const res = [];
    function sumDigits(num){
        return num
        .toString()
        .split('')
        .reduce((sum, digitChar) => sum + parseInt(digitChar), 0);
    }
    for (let num of nums){
        el = sumDigits(num);
        res.push(el)
    }
    return Math.min(...res)
};