/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    let seatsSorted = seats.sort((a,b) => a - b);
    let studentsSorted = students.sort((a,b) => a - b);
    let ans = 0;
    for (let i = 0; i < seats.length; i++){
        ans += Math.abs(seatsSorted[i] - studentsSorted[i])
    }
    return ans
};