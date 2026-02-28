/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function(nums) {
    /* const freq = {};
    for (const num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }
    let result = 0;
    for (const key in freq) {
        if (freq[key] === 2) {
            result ^= Number(key);
        }
    }
    return result; */

    /* const seen = new Set();
    let result = 0;

    for (const num of nums) {
        if (seen.has(num)) {
            result ^= num;
        } else {
            seen.add(num);
        }
    }
    return result; */

    /* let seenOnce = 0;
    let seenTwice = 0;

    for (const num of nums) {
        if ((seenOnce & (1 << num)) !== 0) {
            seenTwice ^= num;
        }

        seenOnce |= (1 << num);
    }
    return seenTwice; */

    let mask = 0n;
    let result = 0;

    for (const num of nums) {
        const bit = 1n << BigInt(num);

        if (mask & bit) {
            result ^= num;
        } else {
            mask |= bit;
        }
    }
    return result;
};