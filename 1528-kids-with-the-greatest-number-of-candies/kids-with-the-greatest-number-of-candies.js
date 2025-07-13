/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const ans = [];
    const max_candy = Math.max(...candies);
    console.log(max_candy);
    for (let candy of candies){
        if ((candy + extraCandies) >= max_candy){
            ans.push(true);
        }
        else {
            ans.push(false)
        }
    }
    return ans
};