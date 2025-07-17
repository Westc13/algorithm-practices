/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let ans = [];
    for (let i = 0; i < command.length; i++){
        if (command[i] == 'G'){
            ans.push('G')
        }
        else if (command[i] == '('){
            if (command[i+1] ==')'){
                ans.push('o')
                i += 1
            }
            else if(command[i+1] == 'a'){
                ans.push('al')
                i += 3
            }
        }
    }
    return ans.join('')

};