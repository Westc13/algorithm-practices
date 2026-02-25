/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let vowels = 'aeiou';
    const first = s.slice(0, s.length / 2).toLowerCase().match(/[aeiou]/gi) || [];
    const second = s.slice(s.length / 2).toLowerCase().match(/[aeiou]/gi) || [];
    return first.length === second.length;
};