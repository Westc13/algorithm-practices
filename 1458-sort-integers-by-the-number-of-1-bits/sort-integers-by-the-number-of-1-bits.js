/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    const bitCount = (num) => {
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
    })
};