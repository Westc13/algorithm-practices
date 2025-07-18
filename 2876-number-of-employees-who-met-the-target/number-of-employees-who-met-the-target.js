/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let ans = 0;
    for (let hour of hours){
        if (hour >= target){
            ans += 1
        }
    }
    return ans
    
};