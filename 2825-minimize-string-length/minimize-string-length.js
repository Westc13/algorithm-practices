/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function(s) {
    /* const uniqueLetters = [...new Set(s)].join("");
    return uniqueLetters.length; */

   /* const visited = new Set();
   let minLength = s.length;

   function dfs(str) {
        if (visited.has(str)) return;
        visited.add(str);

        minLength = Math.min(minLength, str.length);

        for (let i = 0; i < str.length; i++) {
            const c = str[i];

            for (let left = i - 1; left >= 0; left --) {
                if (str[left] === c) {
                    const newStr = str.slice(0, left) + str.slice( left + 1);
                    dfs(newStr);
                    break;
                }
            }

            for (let right = i + 1; right < str.length; right ++) {
                if (str[right] === c) {
                    const newStr = str.slice(0, right) + str.slice(right + 1);
                    dfs(newStr);

                    break;
                }
            }
        }
   }
   dfs(s);
   return minLength; */

   const freq = {};

   for (const c of s) {
        freq[c] = (freq[c] || 0) + 1;
   }

   let length = s.length;

   for (const c in freq) {
    while (freq[c] > 1) {
        freq[c] --;
        length --;
    }
   }
   return length;
};