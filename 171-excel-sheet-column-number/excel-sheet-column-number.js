/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let total = 0;
    for (let char of columnTitle){
        total = total * 26 + (char.charCodeAt(0) - 64);
    }
    return total;
};