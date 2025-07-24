/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    const tIndexMap = {}
    for (let i = 0; i < t.length; i++){
        tIndexMap[t[i]] = i;
    }
    let ans = 0
    for (let i = 0; i < s.length; i++){
        const char = s[i];
        ans += Math.abs(i - tIndexMap[char])
    }
    return ans
};