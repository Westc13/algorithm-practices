/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKConstraintSubstrings = function(s, k) {
    /* const result = [];
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length + 1; j++) {
            result.push(s.slice(i, j));
        }
    }
    
    let count = 0;
    for (let el of result) {
        let zeroCount = 0;
        let oneCount = 0;
        for (let i = 0; i < el.length; i++) {
            if (el[i] === '0') {
                zeroCount ++;
            } else {
                oneCount ++;
            }
        }
        if (zeroCount <= k || oneCount <= k) {
            count++
        }
    }
    return count; */

    /* let count = 0;

    for (let i = 0; i < s.length; i++) {
        let zeroCount = 0;
        let oneCount = 0;

        for (let j = i; j < s.length; j++) {
            if (s[j] === '0') {
                zeroCount ++;
            } else {
                oneCount ++;
            }

            if (zeroCount <= k || oneCount <= k) {
                count ++;
            }
        }
    }
    return count; */

    let left = 0;
    let zeroCount = 0;
    let oneCount = 0;
    let count = 0;

    for (let right = 0; right < s.length; right ++) {
        if (s[right] === '0') {
            zeroCount ++;
        } else {
            oneCount ++;
        }

        while (zeroCount > k && oneCount > k) {
            if (s[left] === '0') {
                zeroCount --;
            } else {
                oneCount --;
            }
            left ++;
        }
        count += right - left + 1;
    }
    return count;
};