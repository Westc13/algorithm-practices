/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    let result = -1;
    for (let i = 0; i < nums.length; i++){
        if (nums.slice(0, i).reduce((accu, curr) => {
            return accu + curr;
        }, 0) === nums.slice(i + 1, nums.length).reduce((accu, curr) => {
            return accu + curr;
        }, 0)) {
            result = i;
            break;
        }
    }
    return result;
};