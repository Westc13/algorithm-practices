/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    const numBin = num.toString(2);
    const flipped = numBin.split('').map(bit => bit === '1' ? '0' : '1').join('');
    return parseInt(flipped, 2);
};