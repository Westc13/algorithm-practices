/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    const words = sentence.split(' ');
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const result = [];
    let goatWord = '';
    for (let i = 0; i < words.length; i++) {
        if (vowels.includes(words[i][0].toLowerCase())) {
            goatWord = words[i] + 'ma';
        } else {
            goatWord = words[i].slice(1);
            goatWord += words[i][0];
            goatWord += 'ma'
        }
        goatWord += 'a'.repeat(i+1);
        result.push(goatWord)
    }
    return result.join(' ');
};