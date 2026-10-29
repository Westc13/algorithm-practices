/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    const chars = s.split('');
    let left = 0;
    let right = s.length - 1;
    let temp = '';
    while (left < right) {
        if (/[a-zA-Z]/.test(chars[left]) && /[a-zA-Z]/.test(chars[right])){
            temp = chars[left];
            chars[left] = chars[right];
            chars[right] = temp;
            left += 1;
            right -= 1;
        } else if (!/[a-zA-Z]/.test(chars[left]) && /[a-zA-Z]/.test(chars[right])) {
            left += 1;
        } else if (/[a-zA-Z]/.test(chars[left]) && !/[a-zA-Z]/.test(chars[right])) {
            right -= 1;
        } else if (!/[a-zA-Z]/.test(chars[left]) && !/[a-zA-Z]/.test(chars[right])) {
            left += 1;
            right -= 1;
        }
    }
    return chars.join('');
};