/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    let minDiff = Infinity;
    let result = -1;
    for (let i = 0; i < points.length; i++) {
        if (points[i][0] === x || points[i][1] === y) {
            const distance = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1]);
            if (distance < minDiff) {
                minDiff = distance;
                result = i;
            }
        }
    }
    return result;
};