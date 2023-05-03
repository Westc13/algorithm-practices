/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = a.length -1;
    let j = b.length -1
    let carry = 0;
    let sum = '';

    while(i >= 0 || j>= 0 || carry >0){
        const digitA = i >= 0 ? parseInt(a[i]) : 0;
        const digitB = j>= 0 ? parseInt(b[j]) : 0;
        const currentSum = digitA + digitB + carry;
        const currentDigit = currentSum % 2;
        carry = Math.floor(currentSum / 2);
        sum = currentDigit + sum;
        i--;
        j--;
    }
    return sum
};