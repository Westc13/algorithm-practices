/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    const res = [];
    let newNums = nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i += 2){
        let alice = nums[i];
        let bob = nums[i + 1];
        res.push(bob, alice);
    }    
    return res
};    