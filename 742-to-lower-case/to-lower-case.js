/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let res = '';
    for (let i = 0; i < s.length; i++){
        let char = s[i];

        if (char >= 'A' && char <= 'Z'){
            let lowerChar = String.fromCharCode(char.charCodeAt(0) + 32);
            res += lowerChar;
        } else {
            res += char;
        }
    }
    return res
};