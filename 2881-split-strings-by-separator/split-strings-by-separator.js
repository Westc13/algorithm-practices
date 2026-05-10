/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    /* const result = [];
    for (let word of words) {
        let current = '';

        for (let char of word) {
            if (char === separator) {
                if (current != '') {
                    result.push(current);
                }
                current = '';
            } else {
                current += char;
            }
        }
        if (current !== '') {
            result.push(current);
        }
    }
    return result; */

    const result = [];

    for (let word of words) {
        const parts = word.split(separator);

        for (let part of parts) {
            if (part !== '') {
                result.push(part);
            }
        }
    }
    return result;
};