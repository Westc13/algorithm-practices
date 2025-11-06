/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function(s) {
    /* let digits = s.split('').map(Number);
    let alteredD = [];
    while (digits.length > 2) {
        for (let i = 0; i < digits.length - 1; i++) {
            let x = (digits[i] + digits[i+1]) % 10;
            alteredD.push(x);
        }
        digits = alteredD;
        alteredD = [];
    }
    return digits[0] === digits[1]; */

    let digits = s.split('').map(Number);
    let len = digits.length;
    let buf = new Array(len - 1).fill(0);
    while (len > 2) {
        let writeCount = len - 1;
        for (let i = 0; i < writeCount; i++) {
            buf[i] = (digits[i] + digits[i+1]) % 10;

        }
        let temp = digits;
        digits = buf;
        buf = temp;
        len = writeCount;
    }
    return digits[0] === digits[1];
};