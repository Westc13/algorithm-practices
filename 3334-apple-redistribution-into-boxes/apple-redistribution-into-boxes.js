/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
    const totalApple = apple.reduce((accu, curr) => accu + curr, 0);
    console.log(totalApple)
    const capacitySorted = capacity.sort((a, b) => b - a);
    let currentCapacity = 0;
    for (let i = 0; i < capacitySorted.length; i++) {
        currentCapacity += capacitySorted[i];
        if(currentCapacity >= totalApple) {
            return i + 1;
        }
    }
};