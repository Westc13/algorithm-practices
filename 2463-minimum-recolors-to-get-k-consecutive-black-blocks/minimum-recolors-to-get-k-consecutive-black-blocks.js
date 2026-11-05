/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    let left = 0;
    let whites = 0;
    let minWhites = Infinity;
    
    for (let right = 0; right < k; right++) {
        if (blocks[right] === 'W') {
            whites++;
        }
    }
    minWhites = Math.min(minWhites, whites);

    for (let right = k; right < blocks.length; right++) {
        if (blocks[left] === 'W') {
            whites--;
        }
        left++;
        if (blocks[right] === 'W') {
            whites++;
        }    
        minWhites = Math.min(minWhites, whites);
    };
    return minWhites;
}