/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
var checkTwoChessboards = function(coordinate1, coordinate2) {
    const sumCoord1 = (coordinate1[0].charCodeAt(0) - 96) + Number(coordinate1[1]);
    const sumCoord2 = (coordinate2[0].charCodeAt(0) - 96) + Number(coordinate2[1]);

    if (sumCoord1 % 2 === sumCoord2 % 2) {
        return true;
    }
    return false;
};