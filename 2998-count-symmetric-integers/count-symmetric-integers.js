/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    /* let count = 0;
    for (let num = low; num <= high; num++){
        const s = num.toString();
        if (s.length % 2 !== 0){ continue};
        const n = s.length / 2;
        const sumFirst = s.slice(0, n).split('').map(Number).reduce((accu, curr) => accu + curr, 0);
        const sumSecond = s.slice(n).split('').map(Number).reduce((accu, curr) => accu + curr, 0);

        if (sumFirst === sumSecond){ count++ };
    }
    return count */

    /* let count = 0;
    function getDigits(num) {
        const digits = [];
        while (num > 0){
            const lastDigit = num % 10;
            digits.push(lastDigit);
            num = Math.floor(num / 10);
        }
        return digits
    };

    function sumHalves(digits) {
        let sum1 = 0, sum2 = 0;

        for (let i = 0; i < digits.length; i++){
            if (i < digits.length / 2){
                sum1 += digits[i];
            } else {
                sum2 += digits[i];
            }
        }
        return sum1 === sum2;
    }

    for (let num = low; num <= high; num++){
        const digits = getDigits(num);
        if (digits.length % 2 === 0 && sumHalves(digits)) {
            count ++;
        }
    }
    return count; */

    let count = 0;
    for (let num = low; num <= high; num++) {
        const s = num.toString();
        const len = s.length;
        const half = len / 2;

        let sumFirst = 0;
        let sumSecond = 0;

        for (let i = 0; i < len; i++) {
            const digit = s.charCodeAt(i) - 48;
            if (i < half) sumFirst += digit;
            else sumSecond += digit;
        }

        if (s.length % 2 === 0 && sumFirst === sumSecond) {
            count ++;
        }
    }
    return count
};