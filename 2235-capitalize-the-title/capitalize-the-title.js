/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    const words = title.split(' ');
    const lowerWords = words.map(word => word.toLowerCase())
    const result = [];
    for (let word of lowerWords) {
        if (word.length > 2) {
            const newWord = word.charAt(0).toUpperCase() + word.slice(1);
            result.push(newWord);
        } else {
            result.push(word);
        }
    }
    return result.join(' ');
};