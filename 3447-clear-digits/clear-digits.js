/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    const stack = [];
    for (let char of s) {
        if (/[a-z]/i.test(char)) {
            stack.push(char);
        } else if (/\d/.test(char)) {
            if (stack.length) stack.pop();
        }
    }
    return stack.join('');
};