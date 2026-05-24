/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    /* const targetFreq = target.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {})
    const arrFreq = arr.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {})

    for (let key in targetFreq) {
        if (targetFreq[key] !== arrFreq[key]) {
            return false;
        }
    }
    return true; */

    const freq = {};

    for (let num of target) {
        freq[num] = (freq[num] || 0) + 1;
    }

    for (let num of arr) {
        if (!freq[num]) {
            return false;
        }

        freq[num]--;
    }
    return true;
};