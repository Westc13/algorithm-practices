/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    /* const total = n * (n + 1) / 2;
    const x = Math.sqrt(total);
    return Number.isInteger(x) ? x: -1; */

    /* const total = n * (n + 1) / 2;

    let leftSum = 0;

    for (let x = 1; x <= n; x++){
        leftSum += x;

        const rightSum = total - (leftSum - x);

        if (leftSum === rightSum) {
            return x;
        }
    }
    return -1; */

    if (n === 1) return 1;

    let l = 1, r = n;
    let sumL = 1, sumR = n;

    while (l < r){
        if (sumL < sumR){
            l++;
            sumL += l;
        } else if (sumR < sumL){
            r--;
            sumR += r;
        } else {
            l++;
            sumL += l;
        }
    }
    return (sumL === sumR) ? l : -1;
    
};