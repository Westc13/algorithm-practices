/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const firstRow = 'qwertyuiop';
    const secondRow = 'asdfghjkl';
    const thirdRow = 'zxcvbnm';
    const result = [];
    function isOneRow(word) {
        word = word.toLowerCase();

        let row;

        if (firstRow.includes(word[0])) {
            row = firstRow;
        } else if (secondRow.includes(word[0])) {
            row = secondRow;
        } else {
            row = thirdRow;
        }

        for (let i = 1; i < word.length; i++) {
            if (!row.includes(word[i])) {
                return false;
            }
            
        }
        return true;
    }
    for (const word of words) {
        if (isOneRow(word)) {
            result.push(word);
        }
    }

    return result;
};