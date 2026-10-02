/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function(s, distance) {
    for (let i = 0; i < s.length - 1; i++) {
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] === s[j]) {
                if (distance[s[i].charCodeAt(0) - 97] !== j - i - 1) {
                    return false;
                }
            }
        }
    }
    return true;
    
};