/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    /* let fullWeeks = Math.floor(n/7);
    let remainder = n % 7;
    return 28 * fullWeeks + 7 * (fullWeeks * (fullWeeks - 1) / 2) + remainder * (1 + fullWeeks) + remainder * (remainder - 1) / 2 */
    let total = 0;
    let currentMonday = 1;
    let dayIndexInWeek = 0;
    let currentDeposit = currentMonday + dayIndexInWeek;
    for (let i = 0; i < n; i++) {
        total += currentDeposit;
        dayIndexInWeek += 1;
        if (dayIndexInWeek === 7) {
            dayIndexInWeek = 0;
            currentMonday += 1;
        }
        currentDeposit = currentMonday + dayIndexInWeek;
    }
    return total;
};