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

    /* const scores = [];
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
    return scores.reduce((accu, curr) => accu + curr, 0); */

    /* const scores = [];

    for (let op of operations) {
        switch (op) {
            default:
            if (!isNaN(op)) {
                scores.push(parseInt(op));
            }
            break;
        case '+': {
            const last = scores[scores.length - 1];
            const secondLast = scores[scores.length - 2];
            scores.push(last + secondLast);
            break;
        }

        case 'D': {
            const last = scores[scores.length - 1];
            scores.push(last * 2);
            break;
        }

        case 'C':
        scores.pop();
        break;
        }
    }
    return scores.reduce((accu, curr) => accu + curr, 0); */


    const scores = [];

    const handlers = {
        '+': () => {
            const last = scores[scores.length - 1];
            const secondLast = scores[scores.length - 2];
            scores.push(last + secondLast);
        },

        'D': () => {
            scores.push(scores[scores.length - 1] * 2);
        },

        'C': () => {
            scores.pop();
        }
    };

    for (let op of operations) {
        if (handlers[op]) {
            handlers[op]();
        } else {
            scores.push(parseInt(op));
        }
    }
    return scores.reduce((accu, curr) => accu + curr, 0);
};