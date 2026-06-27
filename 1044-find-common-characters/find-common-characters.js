/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    const result = [];
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
    return result;
};