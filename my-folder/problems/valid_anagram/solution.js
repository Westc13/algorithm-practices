/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    /* 
    1. Initialize an empty object 'countMap'
2. Iterate through the string 's'
   - If the current letter does not exist in 'countMap', add it with a count of 1
   - Otherwise, increment the count for that letter
3. Iterate through the string 't'
   - If the current letter does not exist in 'countMap', return false
   - Otherwise, decrement the count for that letter
   - If the count for that letter becomes negative, return false
4. Iterate through the keys of 'countMap'
   - If any count is not equal to zero, return false
5. Return true
    */
   const countMap = {};
   for(let i = 0; i<s.length; i++){
       const currentLetter = s[i];
       if(countMap[currentLetter]){
           countMap[currentLetter]++;
       }
       else{
           countMap[currentLetter] = 1;
       }
   }
    for(let j = 0; j<t.length; j++){
        const currentLetter = t[j];
        if(!countMap[currentLetter]){
            return false
        }
        else {
            countMap[currentLetter]--;
            if(countMap[currentLetter]<0){
                return false
            }
        }
    }
    for(let count of Object.values(countMap)){
        if(count !==0){
            return false;
        }
    }
    return true;
}
