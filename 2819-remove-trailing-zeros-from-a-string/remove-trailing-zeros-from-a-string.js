/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    let res = '';
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] === '0') {
            continue;
        }
        else if (num[i] !== '0') {
            res += num.substring(0, i+1);
            break;
        }
    }
    return res;
};