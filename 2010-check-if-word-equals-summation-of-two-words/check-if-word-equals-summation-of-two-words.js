/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    let firstNum = '';
    let secondNum = '';
    let targetNum = '';

    for (let char of firstWord) {
        firstNum += char.charCodeAt(0) - 97;
    }

    for (let char of secondWord) {
        secondNum += char.charCodeAt(0) - 97;
    }

    for (let char of targetWord) {
        targetNum += char.charCodeAt(0) - 97;
    }

    if (Number(firstNum) + Number(secondNum) === Number(targetNum)) return true;
    return false
};