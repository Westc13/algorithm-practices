/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
    let count = 0;
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i].toLowerCase() !== s[i+1].toLowerCase()) {
            count ++;
        }
    }
    return count;
};