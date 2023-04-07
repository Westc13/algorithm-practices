/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x< 0){
        return false
    }
    let originalNumToStrArr= x.toString().split("");
    let reverseOriginalArr = originalNumToStrArr.slice().reverse();
    for (let i = 0; i< originalNumToStrArr.length; i++){
        if (originalNumToStrArr[i] !== reverseOriginalArr[i]){
            return false
        }
    }
    return true
    
};