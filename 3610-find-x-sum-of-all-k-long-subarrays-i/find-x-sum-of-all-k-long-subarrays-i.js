/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function(nums, k, x) {
    const result = [];

    for (let i = 0; i <= nums.length - k; i++) {
        const freq = {};

        for (let j = i; j < i + k; j++) {
            freq[nums[j]] = (freq[nums[j]] || 0) + 1;
        }

        const arr = Object.entries(freq);
        arr.sort((a, b) => {
            if (b[1] !== a[1]) {
                return b[1] - a[1];
            }
            return b[0] - a[0];
        })

        const top = arr.slice(0, x);

        let sum = 0;

        for (const [num, count] of top) {
            sum += Number(num) * count;
        }
        result.push(sum);
    }
    return result;
};