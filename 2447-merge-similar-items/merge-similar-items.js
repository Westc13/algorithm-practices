/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    const map = new Map();

    for (let [value, weight] of items1) {
        map.set(value, weight);
    }

    for (let [value, weight] of items2) {
        if (map.has(value)) {
            map.set(value, map.get(value) + weight);
        } else {
            map.set(value, weight);
        }
    }

    const result = [];
    for (let [value, weight] of map) {
        result.push([value, weight]);
    }

    return result.sort((a, b) => a[0] - b[0]);
};