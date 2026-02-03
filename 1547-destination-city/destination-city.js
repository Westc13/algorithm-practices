/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const starts = new Set();

    for (const [from, to] of paths) {
        starts.add(from);
    }

    for (const [from, to] of paths) {
        if (!starts.has(to)) {
            return to;
        }
    }
};