/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    const col = coordinates.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    const row = Number(coordinates[1]);
    return (col + row) % 2 !== 0;
};