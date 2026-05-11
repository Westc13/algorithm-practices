/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    let pairs = 0;
    const used = new Array(nums.length).fill(false);

    for (let i = 0; i < nums.length; i++) {
        if (used[i]) continue;

        for (let j = i + 1; j < nums.length; j++) {
            if (!used[j] && nums[i] === nums[j]) {
                pairs++;
                used[i] = true;
                used[j] = true;
                break;
            }
        }
    }
    let leftover = 0;

    for (let i = 0; i < used.length; i++) {
        if (!used[i]) leftover++;
    }
    return[pairs, leftover];
};