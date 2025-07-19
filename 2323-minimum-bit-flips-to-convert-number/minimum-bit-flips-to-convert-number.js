/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    const startBin = start.toString(2);
    const goalBin = goal.toString(2);
    const maxLength = Math.max(startBin.length, goalBin.length);
    const paddedStart = startBin.padStart(maxLength, '0');
    const paddedGoal = goalBin.padStart(maxLength, '0');
    let ans = 0;
    for (let i = 0; i < maxLength; i++){
        if (paddedStart[i] !== paddedGoal[i]){
            ans += 1
        }
    }
    return ans
};