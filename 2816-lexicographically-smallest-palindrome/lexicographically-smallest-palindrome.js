/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
    const charArr = s.split('');
    console.log(charArr);
    let i = 0, j = s.length - 1;
    while (i < j) {
    if (charArr[i] !== charArr[j]) {
        let smaller = charArr[i] < charArr[j] ? charArr[i] : charArr[j];
        charArr[i] = smaller, charArr[j] = smaller;
    }
    j --;
    i ++
    };
    return charArr.join('');
};