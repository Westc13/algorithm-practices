/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
    /*const res = [];
    const startCol = s.charCodeAt(0);
    const endCol = s.charCodeAt(3);
    const startRow = Number(s.charAt(1));
    const endRow = Number(s.charAt(4));

    for (let c = startCol; c <= endCol; c++){
        for (let r = startRow; r <= endRow; r++){
            res.push(String.fromCharCode(c) + r)
        }
    }
    return res */

    const res = [];
    const range = s.split(':')
    function parseCell(cell){
        let i = 0;
        while (i < cell.length && /[A-Z]/.test(cell[i])) i++;
        const col = cell.slice(0, i);
        const row = Number(cell.slice(i));
        return [col, row];
    }
    const start = parseCell(range[0]);
    const end = parseCell(range[1]);

    const startCol = start[0].charCodeAt(0);
    const endCol = end[0].charCodeAt(0);

    const startRow = start[1];
    const endRow = end[1];

    for (let c = startCol; c <= endCol; c++){
        for (let r = startRow; r <= endRow; r++){
            res.push(String.fromCharCode(c) + r)
        }
    }
    return res
};