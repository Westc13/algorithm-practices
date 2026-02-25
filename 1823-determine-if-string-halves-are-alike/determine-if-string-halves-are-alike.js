/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    /* let vowels = 'aeiou';
    const first = s.slice(0, s.length / 2).toLowerCase().match(/[aeiou]/gi) || [];
    const second = s.slice(s.length / 2).toLowerCase().match(/[aeiou]/gi) || [];
    return first.length === second.length; */

    let count = 0;
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let mid = s.length / 2;

    for (let i = 0; i < mid; i++) {
        if (vowels.has(s[i])) count++;
        if (vowels.has(s[i + mid])) count--;
    }
    return count === 0;
};