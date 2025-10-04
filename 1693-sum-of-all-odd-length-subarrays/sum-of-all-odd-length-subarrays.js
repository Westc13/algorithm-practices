/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    const n = arr.length;
    let total = 0;

    for (let i = 0; i < n; i++){
        const L = i + 1;
        const R = n - i;
        const totalSubarraysIncludingI = L * R;
        const oddCount = Math.floor((totalSubarraysIncludingI + 1) / 2);
        total += arr[i] * oddCount;
    }
    return total;
};