/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count = 0;
    for (let word of words){
        let is_valid = true;
        for (let char of word){
            if(!allowed.includes(char)){
                is_valid = false;
                break;
            }
        }
        if (is_valid){count ++};
    }
    return count;
};