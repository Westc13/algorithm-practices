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



    /* const bitCountMap = new Map();

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
    }) */



    /* const bitCount = (num) => {
        let count = 0;
        while (num > 0) {
            count += num & 1;
            num >>= 1;
        }
        return count;
    };
    return arr
        .map(num => [bitCount(num), num])
        .sort((a, b) => {
            if (a[0] === b[0]) {
                return a[1] - b[1];
            }
            return a[0] - b[0];
        })
        .map(pair => pair[1]); */


    const bitCount = (num) => {
        let count = 0;
        while (num !== 0) {
            num = num & (num - 1);
            count ++;
        }
        return count;
    };
    return arr
        .map(num => [bitCount(num), num])
        .sort((a, b) => {
            if (a[0] === b[0]) {
                return a[1] - b[1];
            }
            return a[0] - b[0];
        })
        .map(arr => arr[1]);
};