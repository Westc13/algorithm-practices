/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
    const result = [];
    for (let i = 0; i < s.length; i += k) {
        let group = s.slice(i, i + k);
        while (group.length < k) {
            group += fill;
        }
        result.push(group)
    }
    return result;
};