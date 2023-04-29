/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for (let i = 0; i <= (haystack.length - needle.length); i ++){
        const substring = haystack.slice(i, i + needle.length)
            if (substring === needle){
                return i
            }
    }
            return -1
};