/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    /* let earliestIndex = s.length;
    let answer = '';

    for (let i = 0; i < s.length; i++) {
        for ( let j = i + 1; j < s.length; j++) {
            if (s[i] === s[j]) {
                if (j < earliestIndex) {
                    earliestIndex = j;
                    answer = s[i];
                }
                break;
            }
        }
    }
    return answer; */

    const seen = new Set();

    for (const char of s) {
        if (seen.has(char)) {
            return char;
        }
        seen.add(char)
    }
};