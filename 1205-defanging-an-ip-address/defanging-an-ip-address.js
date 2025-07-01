/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    ans = address.replaceAll('.', '[.]')
    return ans
};