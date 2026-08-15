/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function(nums) {
    /* const points = [];
    for (let i = 0; i < nums.length; i++) {
        for (let point = nums[i][0]; point <= nums[i][1]; point++) {
            if (!points.includes(point)) {
                points.push(point)
            }
        }
    }
    return points.length; */

    const covered = new Array(101).fill(false);

    for (let i = 0; i < nums.length; i++) {
        for (let point = nums[i][0]; point <= nums[i][1]; point++) {
            covered[point] = true;
        }
    }
    let result = 0;
    for (let point = 1; point <= 100; point++) {
        if (covered[point]) {
            result++;
        }
    }
    return result;
}; 