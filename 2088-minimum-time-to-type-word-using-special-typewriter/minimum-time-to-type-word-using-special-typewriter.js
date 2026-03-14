/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function(word) {
    let time = 0;
    let current = 'a';

    for (let char of word) {
        let diff = Math.abs(char.charCodeAt(0) - current.charCodeAt(0));
        let move = Math.min(diff, 26 - diff);

        time +=  move + 1;
        current = char;
    }
    return time;
};