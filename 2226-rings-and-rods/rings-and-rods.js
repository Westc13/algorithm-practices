/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    const rods = new Array(10).fill(0);

    for (let i = 0; i < rings.length; i += 2) {
        const color = rings[i];
        const pos = parseInt(rings[i + 1], 10);

        if (color === 'R') rods[pos] |= 1;
        else if (color === 'G') rods[pos] |= 2;
        else if (color === 'B') rods[pos] |= 4;
    }

    let count = 0;
    for (let mask of rods) {
        if (mask === 7) count++;
    }
    return count;
};