/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let steps = 0;
    let newNum = num;
    while (newNum > 0){
        if (newNum % 2 === 0){
            newNum /= 2;
            steps += 1;
        } else {
            newNum --
            steps += 1;
        }
    }
    return steps;
};