/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    function containsOnlyNonAlphanumeric(s){
        return (/^[^a-zA-Z0-9]+$/.test(s));
    }
    if (s==="" || s===" " || s.length > 0 && containsOnlyNonAlphanumeric(s)) {return true} else{ 
        const cleanS = s.toLowerCase().replace(/[^0-9a-zA-Z]/g, '');
    
    const reverseS = cleanS.split("").reverse().join("");


   if (cleanS === reverseS){
       return cleanS
   
   }else {return false}
}
};
