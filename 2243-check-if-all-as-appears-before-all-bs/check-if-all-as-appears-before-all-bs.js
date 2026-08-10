/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    const aIndice = [];
    const bIndice = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a') {
            aIndice.push(i);
        } else {
            bIndice.push(i);
        }
    }
    return Math.max(...aIndice) < Math.min(...bIndice); 
};