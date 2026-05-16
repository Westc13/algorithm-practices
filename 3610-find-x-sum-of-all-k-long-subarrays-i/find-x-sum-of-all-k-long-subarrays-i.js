/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function(nums, k, x) {
    /* const result = [];

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
    return result; */

    const result = [];
    const freq = {};

    for (let i = 0; i < k; i++) {
        freq[nums[i]] = (freq[nums[i]] || 0) + 1;
    }

    function getXSum() {
        const arr = Object.entries(freq);

        arr.sort((a, b) => {
            if (b[1] !== a[1]) {
                return b[1] - a[1];
            }
            return b[0] - a[0];
        })
        let sum = 0;

        for (let i = 0; i < Math.min(x, arr.length); i++) {
            sum += Number(arr[i][0]) * arr[i][1];
        }
        return sum;
    }
    result.push(getXSum());

    for (let right = k; right < nums.length; right++) {
        const left = right - k;
        freq[nums[left]]--;
        if (freq[nums[left]] === 0) {
            delete freq[nums[left]];
        }

        freq[nums[right]] = (freq[nums[right]] || 0) + 1;

        result.push(getXSum());
    }
    return result;
};