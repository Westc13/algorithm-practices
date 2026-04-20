/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
    /* const result = [];
    for (let i = 0; i < s.length; i += k) {
        let group = s.slice(i, i + k);
        while (group.length < k) {
            group += fill;
        }
        result.push(group)
    }
    return result; */

    const result = [];

    for (let i = 0; i < s.length; i += k) {
        let group = '';

        for (let j = i; j < i + k; j++) {
            if (j < s.length) {
                group += s[j];
            } else {
                group += fill;
            }
        }
        result.push(group);
    }
    return result;
};