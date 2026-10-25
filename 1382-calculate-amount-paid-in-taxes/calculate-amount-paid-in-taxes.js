/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function(brackets, income) {
    let result = 0;
    let previousUpper = 0;
    for (let i = 0; i < brackets.length; i++){
        const taxable = Math.min(income, brackets[i][0] - previousUpper)
        result += taxable * brackets[i][1] / 100;
        income -= taxable;
        previousUpper = brackets[i][0];
    }
    return result;
};