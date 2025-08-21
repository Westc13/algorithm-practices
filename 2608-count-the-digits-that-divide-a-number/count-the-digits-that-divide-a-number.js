/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    const digits = num.toString().split('').map(char => parseInt(char, 10));
    let count = 0;
    for (let digit of digits){
        if (num % digit === 0){
            count ++;
        }
    }
    return count
};