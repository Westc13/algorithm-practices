/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
    const lengths = [];
    for (let rec of rectangles) {
        let length = Math.min(...rec);
        lengths.push(length);
    }
    let largest = Math.max(...lengths);
    let count = 0;
    for (let length of lengths) {
        if (length === largest) {
            count ++;
        }
    }
    return count;
};