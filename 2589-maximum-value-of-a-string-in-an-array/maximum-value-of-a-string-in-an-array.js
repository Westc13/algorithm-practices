/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    let maxVal = -Infinity;
    function isOnlyDigits(str) {
        return /^\d+$/.test(str);
    }

    for (const str of strs) {
        let value;

        if (isOnlyDigits(str)) {
            value = Number(str);
        } else {
            value = str.length;
        }

        maxVal = Math.max(maxVal, value);
    }
    return maxVal;
};