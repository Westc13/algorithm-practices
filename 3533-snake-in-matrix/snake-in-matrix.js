/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function(n, commands) {
    let idx = 0;
    for (const cmd of commands) {
        if (cmd === 'RIGHT') idx += 1;
        else if (cmd === 'LEFT') idx -= 1;
        else if (cmd === 'DOWN') idx += n;
        else if (cmd === 'UP') idx -= n;
    }
    return idx;
};