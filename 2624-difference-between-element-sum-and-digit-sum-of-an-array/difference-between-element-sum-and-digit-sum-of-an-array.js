/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    const elSum = nums.reduce((accu, curr) => {
        return accu + curr;
    }, 0)

    let digitSum = 0;
    for (let num of nums){
        let digits = num.toString().split('');
        for (let d of digits){
            digitSum += Number(d);
        }
    }
    return Math.abs(elSum - digitSum);
}