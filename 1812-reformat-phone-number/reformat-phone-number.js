/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function(number) {
    const digits = number.replace(/[\s-]/g, '');
    const blocks = [];
    let i = 0;

    while (digits.length - i > 4) {
        blocks.push(digits.slice(i, i + 3));
        i += 3;
    }

    const remaining = digits.length - i;
    if (remaining === 4) {
        blocks.push(digits.slice(i, i + 2));
        blocks.push(digits.slice(i + 2, i + 4));
    } else {
        blocks.push(digits.slice(i));
    }
    return blocks.join('-');
};