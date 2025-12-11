/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    const rods = Array.from({length: 10}, () => new Set());

    for (let i = 0; i < rings.length; i += 2) {
        const color = rings[i];
        const rodIndex = parseInt(rings[i + 1], 10);
        rods[rodIndex].add(color);
    }
    let count = 0;
    for (let rod of rods) {
        if (rod.size === 3) {
            count ++;
        }
    }
    return count;
};