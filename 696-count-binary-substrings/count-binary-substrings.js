/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    /* function sameHalf(s) {
        return [...s].every(char => char === s[0]);
    }
    let count = 0;
    for (let i = 0; i < s.length - 1; i++) {
        for (let j = i + 1; j < s.length; j++) {
            const subString = s.slice(i, j + 1);
            if (subString.length % 2 === 0) {
                const firstHalf = subString.slice(0, subString.length / 2);
                const secondHalf = subString.slice(subString.length / 2, subString.length);
                if (sameHalf(firstHalf) && sameHalf(secondHalf) && firstHalf[0] !== secondHalf[0]) {
                    count++;
                }
                
            }
        }
    }
    return count; */

    let prevGroup = 0;
    let currGroup = 1;
    let count = 0;
    for (let i = 1; i < s.length; i++) {
        if (s[i] !== s[i - 1]) {
            count += Math.min(prevGroup, currGroup)
            prevGroup = currGroup;
            currGroup = 1
        } else {
            currGroup++;
        }
    }
    count += Math.min(prevGroup, currGroup)
    return count;
};