/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    const indice = [];
    const answer = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            indice.push(i);
        }
    }

    for (let i = 0; i < s.length; i++) {
        let minDist = Infinity;

        for (const index of indice) {
            const distance = Math.abs(i - index);
            minDist = Math.min(minDist, distance);
        }
        answer.push(minDist)
    }
    return answer;
};