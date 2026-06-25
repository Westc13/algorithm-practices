/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);

    let totalUnits = 0;
    for (const [boxes, units] of boxTypes) {
        const take = Math.min(boxes, truckSize);
        totalUnits += take * units;
        truckSize -= take;
        if (truckSize === 0) {
            break;
        }
    }
    return totalUnits;
};