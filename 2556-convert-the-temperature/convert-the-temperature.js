/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    let kelvin = celsius + 273.15
    let fahrenheit = celsius * 1.80 + 32.00
    const ans = []
    ans.push(kelvin, fahrenheit)
    return ans
};