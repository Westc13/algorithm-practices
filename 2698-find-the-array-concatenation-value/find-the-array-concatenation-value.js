/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
    let answer = 0;
    while (nums.length > 1) {
        answer += Number(String(nums[0]) + String(nums[nums.length - 1]));
        nums.shift();
        nums.pop();        
    }
    if (nums.length === 0) {
        return answer;
    }
    return answer + nums[0];
};