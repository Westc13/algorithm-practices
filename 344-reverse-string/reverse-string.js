/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    /*s.reverse(); */
    /* for (let i = 0; i < s.length / 2; i++){
        let j = s.length - 1 - i;
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;
    } */
    let left = 0, right = s.length -1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left ++;
        right --;
    }
};