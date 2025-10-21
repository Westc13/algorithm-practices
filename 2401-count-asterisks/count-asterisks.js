/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let count = 0;
    let insidePair = false;
    for (let char of s) {
        if (char === '*' && insidePair === false) {
            count ++;
        } else if (char === '|') {
            insidePair = !insidePair;
            continue;
        }
    }
    return count
};