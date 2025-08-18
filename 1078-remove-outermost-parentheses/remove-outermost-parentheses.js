/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let counter = 0;
    let result = '';
    for (let ch of s){
        if (ch === '('){
           if (counter > 0){
            result += ch;
           }
           counter ++;
        }
        else {
            counter --;
            if (counter > 0){
                result += ch
            }
        }
    }
    return result;
};