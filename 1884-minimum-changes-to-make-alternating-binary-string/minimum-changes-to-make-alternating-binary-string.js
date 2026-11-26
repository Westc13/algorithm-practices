/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let flipsA = 0;
    let flipsB = 0;

    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0 && s[i] === '0') {
            flipsB++;
        }
        if (i % 2 === 1 && s[i] === '1') {
            flipsB++;
        }
        if (i % 2 === 0 && s[i] === '1') {
            flipsA++;
        }
        if (i % 2 === 1 && s[i] === '0') {
            flipsA++;
        }
    }
    return Math.min(flipsA, flipsB);
};