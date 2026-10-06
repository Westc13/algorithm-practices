/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let result = 0
    for (let i = 2; i <= num; i++) {
        const digits = String(i).split('').map(digit => Number(digit));
        const sumDigits = digits.reduce((accu, curr) => {
            return accu + curr;
        }, 0);
        if (sumDigits % 2 === 0) {
            result++;
        }
    }
    return result;
};