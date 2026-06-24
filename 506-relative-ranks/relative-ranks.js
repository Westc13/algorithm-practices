/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const original = [...score];
    score = score.sort((a, b) => b - a);
    const rankMap = {};
    for (let i = 0; i < score.length; i++) {
        if (i === 0) {
            rankMap[score[i]] = 'Gold Medal';
        }
        else if (i === 1) {
            rankMap[score[i]] = 'Silver Medal';
        }
        else if (i === 2) {
            rankMap[score[i]] = 'Bronze Medal';
        }
        else {
            rankMap[score[i]] = String(i+1)
        }
    }
    return original.map(num => rankMap[num])
};