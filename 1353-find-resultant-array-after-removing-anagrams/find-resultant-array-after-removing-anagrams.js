/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    const result = [words[0]];

    const freq = (word) => [...word].reduce((accu, curr) => {
        accu[curr] = (accu[curr] || 0) + 1;
        return accu;
    }, {});

    const areAnagrams = (wordA, wordB) => {
        const freqA = freq(wordA);
        const freqB = freq(wordB);
        if (wordA.length !== wordB.length) return false;
        for (const letter of Object.keys(freqA)) {
            if (freqA[letter] !== freqB[letter]) {
                return false;
            }
        }
        return true;
    }
    for (let i = 1; i < words.length; i++) {
        if (!areAnagrams(words[i], result[result.length -1])){
            result.push(words[i]);
        }
    }
    return result;
};