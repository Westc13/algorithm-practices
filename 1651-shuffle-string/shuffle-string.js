/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let pairs = [];
    for (let i = 0; i < s.length; i++){
        pairs.push([s[i], indices[i]]);
    }
    pairs.sort((a, b) => a[1] - b[1]);

    return pairs.map(pair => pair[0]).join('');
};