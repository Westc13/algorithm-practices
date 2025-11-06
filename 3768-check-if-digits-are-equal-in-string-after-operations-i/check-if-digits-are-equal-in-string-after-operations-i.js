/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function(s) {
    let digits = s.split('').map(Number);
    let alteredD = [];
    while (digits.length > 2) {
        for (let i = 0; i < digits.length - 1; i++) {
            let x = (digits[i] + digits[i+1]) % 10;
            alteredD.push(x);
        }
        digits = alteredD;
        alteredD = [];
    }
    return digits[0] === digits[1];
};