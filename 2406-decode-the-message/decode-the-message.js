/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    let map = {};
    let seen = new Set();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let idx = 0;

    for (let ch of key){
        if (ch !== ' ' && !seen.has(ch)){
            map[ch] = alphabet[idx];
            seen.add(ch);
            idx++;
            if (idx === 26) break
        }
    }

    let decoded = '';
    for (let ch of message){
        decoded += (ch === ' ') ? ' ' : map[ch];
    }
    return decoded
};