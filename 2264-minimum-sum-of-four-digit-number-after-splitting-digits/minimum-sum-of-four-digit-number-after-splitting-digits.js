/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let digits = num.toString().split('').sort();
    let new1Digits = [];
    let new2Digits = [];
    for (let i = 0; i < digits.length; i++){
        if (i%2 === 0){

        new1Digits.push(digits[i]);
        } else {

        new2Digits.push(digits[i])
        }
    }
    return Number(new1Digits.join("")) + Number(new2Digits.join(""))
};