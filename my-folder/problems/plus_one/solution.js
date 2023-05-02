/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const n = digits.length;
    let carry = 1;

    for (let i= n-1; i>=0; i--){
        const sum = digits[i] + carry;
        digits[i] = sum % 10;
        carry = Math.floor(sum/10);
    }
    if (carry >0){
        digits.unshift(carry)
    }
    return digits
};