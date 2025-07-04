/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let ans = 0;
    for (const element of operations){
        if (element === '--X' || element === 'X--'){
            ans -= 1
            continue
        };
        if (element === '++X' || element === 'X++'){
            ans += 1
            continue
        }
    }
    return ans
};