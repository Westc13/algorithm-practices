/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let answer = '';
    let length = Math.min(word1.length, word2.length);
    for (let i = 0; i < length; i++) {
        answer += word1[i];
        answer += word2[i];
    }
    if (word1.length > word2.length) {
        answer += word1.slice(length, word1.length );
    } else if (word2.length > word1.length) {
        answer += word2.slice(length, word2.length);
    }
    return answer;
};