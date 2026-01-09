/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    /* const scores = [];
    for (let i = 0; i < operations.length; i++) {
        const op = operations[i];
        if (!isNaN(op)) {
            scores.push(parseInt(op));
        }
        else if (op === '+') {
            let last = scores[scores.length - 1];
            let secondLast = scores[scores.length - 2];
            scores.push(last + secondLast);
        }
        else if (op === 'D') {
            let last = scores[scores.length - 1];
            scores.push(last * 2);
        }
        else if (op === 'C') {
            scores.pop();
        }
    }
    return scores.reduce((accu, curr) => accu + curr, 0) */

    const scores = [];
    for (let op of operations) {
        if (!isNaN(op)) {
            scores.push(parseInt(op));
        }
        else if (op === '+') {
            let last = scores[scores.length - 1];
            let secondLast = scores[scores.length - 2];
            scores.push(last + secondLast);
        }
        else if (op === 'D') {
            let last = scores[scores.length - 1];
            scores.push(last * 2);
        }
        else if (op === 'C') {
            scores.pop();
        }
    }
    return scores.reduce((accu, curr) => accu + curr, 0);

};