/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
    const boxes = {};
    let maxBalls = 0;

    function digitSum(num) {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    for (let ball = lowLimit; ball <= highLimit; ball++) {
        const box = digitSum(ball);

        boxes[box] = (boxes[box] || 0) + 1;
        maxBalls = Math.max(maxBalls, boxes[box]);
    }
    return maxBalls;
};