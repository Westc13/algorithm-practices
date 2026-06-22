/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
    /* const boxes = {};
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
    return maxBalls; */

    function digitSum(num) {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    const boxes = {};
    let maxBalls = 0;

    let currentSum = digitSum(lowLimit);

    for (let num = lowLimit; num <= highLimit; num++) {
        boxes[currentSum] = (boxes[currentSum] || 0) + 1;
        maxBalls = Math.max(maxBalls, boxes[currentSum]);

        if (num < highLimit) {
            currentSum++;

            let x = num;

            while (x % 10 === 9) {
                currentSum -= 9;
                x = Math.floor(x / 10);
            }
        }
    }
    return maxBalls;
};