/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    const wealth = []
    for (let account of accounts){
        let sum = 0
        account.forEach(num =>{
            sum += num
        })
        wealth.push(sum)
    }
    return Math.max(...wealth)
};