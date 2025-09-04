/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    /*const elSum = nums.reduce((accu, curr) => {
        return accu + curr;
    }, 0)

    let digitSum = 0;
    for (let num of nums){
        let digits = num.toString().split('');
        for (let d of digits){
            digitSum += Number(d);
        }
    }
    return Math.abs(elSum - digitSum); */
    
    const elSum = nums.reduce((a,b) => a + b, 0);

    let digitSum = 0;
    for (let num of nums){
        while (num > 0){
            digitSum += num % 10;
            num = Math.floor(num / 10);
        }
    }
    return Math.abs(elSum - digitSum)
}