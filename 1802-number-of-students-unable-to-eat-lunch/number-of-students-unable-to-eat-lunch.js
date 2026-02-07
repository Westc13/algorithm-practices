/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let zeros = students.reduce((accu, curr) => {
        if (curr === 0) {
            accu ++;
        }
        return accu;
    }, 0);

    let ones = students.reduce((accu, curr) => {
        if (curr === 1) {
            accu ++;
        }
        return accu;
    }, 0);

    for (let sandwich of sandwiches) {
        if (sandwich === 0 && zeros > 0) {
            zeros--;
        } else if (sandwich === 1 && ones > 0) {
            ones--;
        } else {
            break;
        }
    }
    return zeros + ones;
};