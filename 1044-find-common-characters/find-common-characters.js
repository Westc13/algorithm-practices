/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    /* const result = [];
    words = [...words]
    for (let char of words[0]) {
        let found = true;

        for (let i = 1; i < words.length; i++) {
            let index = words[i].indexOf(char);

            if (index === -1) {
                found = false;
                break;
            }
            words[i] = words[i].slice(0, index) + words[i].slice(index + 1);
        }
        if (found) {
            result.push(char)
        }
    }
    return result; */

    let minFreq = new Array(26).fill(Infinity);

    for (let word of words) {
        let freq = new Array(26).fill(0);

        for (let char of word) {
            freq[char.charCodeAt(0) - 97]++;
        }

        for (let i = 0; i < 26; i++) {
            minFreq[i] = Math.min(minFreq[i], freq[i]);
        }
    }

    let result = [];

    for (let i = 0; i < 26; i++) {
        while (minFreq[i] > 0) {
            result.push(String.fromCharCode(i + 97));
            minFreq[i]--;
        }
    }
    return result;
};