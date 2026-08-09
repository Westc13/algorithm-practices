/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = 0;
    for (let i = 0; i < word.length; i++) {
        const vowelSeen = new Set();
        for (let j = i; j < word.length; j++) {
            if (!vowels.includes(word[j])) {
                break;
            } else {
                vowelSeen.add(word[j]);
                if (vowelSeen.size === 5) {
                    result++;
                }
            }
        }
    }
    return result;
};