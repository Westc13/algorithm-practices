/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    /* const freq = {};

    for (const num of arr1) {
        freq[num] = (freq[num] || 0) + 1;
    }

    const result = [];

    for (const num of arr2) {
        while (freq[num] > 0) {
            result.push(num);
            freq[num]--;
        }
    }
    const remaining = [];

    for (const key in freq) {
        while (freq[key] > 0) {
            remaining.push(Number(key));
            freq[key]--;
        }
    }
    remaining.sort((a, b) => a - b);
    return result.concat(remaining); */

    const order = new Map();

    for (let i = 0; i < arr2.length; i++) {
        order.set(arr2[i], i);
    }

    return arr1.sort((a, b) => {
        const aIn = order.has(a);
        const bIn = order.has(b);

        if (aIn && bIn) {
            return order.get(a) - order.get(b);
        }
        if (aIn) return -1;
        if (bIn) return 1;

        return a - b;
    })
};