/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const ans = [];
    const nBi = [];
    for (let i = 0; i <= n; i++) {
        nBi.push(i.toString(2));
    }
    for (let i = 0; i < nBi.length; i++) {
        const count = (nBi[i].match(/1/g) || []).length;
        ans.push(count);
    }
    return ans;
};