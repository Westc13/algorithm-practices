/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function(num) {
    const numStr = num.toString();

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
    return Number(maxStr) - Number(minStr);

};