/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    const result = [];

    const count = new Array(10).fill(0);
    for (const d of digits) {
        count[d] ++;
    }

    for (let num = 100; num <= 998; num += 2) {
        const temp = new Array(10).fill(0);

        const a = Math.floor(num / 100);
        const b = Math.floor((num % 100) / 10);
        const c = num % 10;

        temp[a] ++;
        temp[b] ++;
        temp[c] ++;

        let valid = true;
        for (let i = 0; i < 10; i++) {
            if (temp[i] > count[i]) {
                valid = false;
                break;
            }
        }
        if (valid) result.push(num);
    }
    return result;
};