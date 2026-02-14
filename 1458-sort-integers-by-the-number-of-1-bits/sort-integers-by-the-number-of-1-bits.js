/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    /* const bitCount = (num) => {
        let count = 0;
        while (num > 0) {
            count += num & 1;
            num >>= 1;
        }
        return count;
    };

    return arr.sort((a, b) => {
        const bitsA = bitCount(a);
        const bitsB = bitCount(b);

        if (bitsA === bitsB) {
            return a - b;
        }
        return bitsA - bitsB;
    }) */

    const bitCountMap = new Map();

    const bitCount = (num) => {
        let count = 0;
        while (num > 0) {
            count += num & 1;
            num >>= 1;
        }
        return count;
    };

    for (let num of arr) {
        bitCountMap.set(num, bitCount(num));
    }
    return arr.sort((a, b) => {
        const diff = bitCountMap.get(a) - bitCountMap.get(b);
        return diff === 0 ? a - b: diff;
    })
};