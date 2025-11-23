/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function(k) {
    let word = 'a';
    const nextChar = c => c === 'z' ? 'a': String.fromCharCode(c.charCodeAt(0) + 1);
    while (word.length < k) {
        let changed = '';
        for (let i = 0; i < word.length; i++) {
            changed += nextChar(word[i]);
        }
        word += changed;
    }
    return word[k - 1];
};