/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    const vowels = 'aeiou';
    const freq = {};
    const freqV = {};
    const freqC = {};
    for (let char of s){
        freq[char] = (freq[char] || 0) + 1;
        if (vowels.includes(char)){
            freqV[char] = freq[char];
        }
        else {
            freqC[char] = freq[char]
        }
    }
    const valuesV = Object.values(freqV);
    const valuesC = Object.values(freqC);
    const maxV = valuesV.length > 0 ? Math.max(...valuesV) : 0;
    const maxC = valuesC.length > 0 ? Math.max(...valuesC) : 0;
    return maxV + maxC
};