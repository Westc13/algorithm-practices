/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const digits = String(n).split('').map(Number)
    let product = digits.reduce((accumulator, current) => {
        return accumulator * current
    })
    let digitSum = digits.reduce((accumulator, current) => {
        return accumulator + current
    })
    return (product - digitSum)
};