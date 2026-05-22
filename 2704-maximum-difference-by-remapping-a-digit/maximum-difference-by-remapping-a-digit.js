/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function(num) {
    /* const numStr = num.toString();

    let maxStr = numStr;
    for (let ch of numStr) { 
        if (ch !== '9') {
            maxStr = numStr.replaceAll(ch, '9');
            break;
        }
    }
    

    let minStr = numStr;
    for(let ch of numStr) {
        if (ch !== '0') {
            minStr = numStr.replaceAll(ch, '0');
            break;
        }
    }
    return Number(maxStr) - Number(minStr); */

    const str = num.toString();

    let maxTarget = null;
    for (let ch of str) {
        if (ch !== '9') {
            maxTarget = ch;
            break;
        }
    }

    let maxStr = '';

    for (let ch of str) {
        if (ch === maxTarget) {
            maxStr += '9';
        } else {
            maxStr += ch;
        }
    }

    let minTarget = null;
    for (let ch of str) {
        if (ch !== '0') {
            minTarget = ch;
            break;
        }
    }

    let minStr = '';

    for (let ch of str) {
        if (ch === minTarget) {
            minStr += '0';
        } else {
            minStr += ch;
        }
    }
    return Number(maxStr) - Number(minStr);
};