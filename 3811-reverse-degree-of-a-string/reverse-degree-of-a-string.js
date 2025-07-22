/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let ans = 0;
    for (let i = 0; i < s.length; i++){
        let reversedIndex = 123 - s[i].charCodeAt(0)
        ans += (i + 1) * reversedIndex
    }
    return ans
};