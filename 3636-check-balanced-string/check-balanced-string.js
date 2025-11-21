/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < num.length; i++) {
        if (i % 2 !== 0) {
            oddSum += parseInt(num[i]);
        }
        else {
            evenSum += parseInt(num[i]);
        }
    }
    return oddSum === evenSum;    
};