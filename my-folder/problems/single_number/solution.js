/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
        let singles = []; // new array to hold singles
    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        let matchIndex = singles.indexOf(current); // check if current is in singles
        if (matchIndex !== -1) { // if match found, remove from singles and move to next i
            singles.splice(matchIndex, 1);
            continue;
        }
        // if no match found, add current to singles
        singles.push(current);
    }
    // singles should contain only one element which is the single number
    return singles[0];
};