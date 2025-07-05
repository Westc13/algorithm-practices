/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let ans = 0;
    for (let stone of stones){
        if (jewels.includes(stone)){
            ans += 1;
        }
    }
    return ans
};