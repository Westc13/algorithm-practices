/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    const stack = [];
    for (let char of s) {
        if (typeof char === 'string' && /[a-z]/i.test(char)) {
            stack.push(char);
        } else if (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) {
            stack.pop();
        }
    }
    return stack.join('');
};