/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    /* let result = 0;
    while (num > 9) {
        result = 0;
        while (num > 0) {
            result += num % 10;
            num = Math.floor(num / 10);
        }
        num = result;
    }
    return num; */
    
    if (num === 0) return 0;

    return num % 9 === 0 ? 9 : num % 9;
};