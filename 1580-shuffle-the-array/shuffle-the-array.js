/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let x_array = nums.slice(0, n)
    let y_array = nums.slice(n)
    const ans = []
    for (let i = 0; i < n; i++){
        ans.push(x_array[i])
        ans.push(y_array[i])
    }
    return ans
};