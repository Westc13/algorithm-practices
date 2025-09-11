/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    /* const res = [];
    while (heights.length > 0) {
        let maxIndex = heights.indexOf(Math.max(...heights));
        res.push(names[maxIndex]);
        heights.splice(maxIndex, 1);
        names.splice(maxIndex, 1);
    }
    return res */
    const people = names.map((name, i) =>
        [heights[i], name]);

    people.sort((a, b) => b[0] - a[0]);

    return people.map(person => person[1])
};