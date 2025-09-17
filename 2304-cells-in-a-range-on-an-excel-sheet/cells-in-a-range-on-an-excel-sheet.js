/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
    const res = [];
    const startCol = s.charCodeAt(0);
    const endCol = s.charCodeAt(3);
    const startRow = Number(s.charAt(1));
    const endRow = Number(s.charAt(4));

    for (let c = startCol; c <= endCol; c++){
        for (let r = startRow; r <= endRow; r++){
            res.push(String.fromCharCode(c) + r)
        }
    }
    return res
};