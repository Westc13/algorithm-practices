/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    let count = 0;
    for (let num = low; num <= high; num++){
        const s = num.toString();
        if (s.length % 2 !== 0){ continue};
        const n = s.length / 2;
        const sumFirst = s.slice(0, n).split('').map(Number).reduce((accu, curr) => accu + curr, 0);
        const sumSecond = s.slice(n).split('').map(Number).reduce((accu, curr) => accu + curr, 0);

        if (sumFirst === sumSecond){ count++ };
    }
    return count
};