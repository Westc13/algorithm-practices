/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    /* let prev = '';
    while (s !== prev) {
        prev = s;
        s = s.split('AB').join('').split('CD').join('');
    }
    return s.length; */

    /* let prev;

    do {
        prev = s;
        s = s.split('AB').join('').split('CD').join('');
    } while (s !== prev);

    return s.length; */

    const stack = [];

    for (let char of s) {
        if (stack.length &&  ((stack[stack.length -1] === 'A' && char === 'B') || (stack[stack.length - 1] === 'C' && char === 'D'))) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.length;
};