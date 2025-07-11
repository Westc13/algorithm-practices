/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    const date_parts = date.split('-');
    for (let i = 0; i < date_parts.length; i++){
        let part_num = parseInt(date_parts[i]);
        date_parts[i] = part_num.toString(2)
    }
    return date_parts.join('-')
};