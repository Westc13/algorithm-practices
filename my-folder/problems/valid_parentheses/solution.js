/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s)
{
  if (s.length % 2 !== 0 || !/^[()\[\]{}]+$/.test(s)) {
    // If the string length is odd or contains non-bracket characters,
    // it cannot be a valid parentheses string
    return false;
  }

  const stack = [];
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (const char of s) {
    if (char in pairs) {
      // Closing bracket
      if (stack.pop() !== pairs[char]) {
        // If the topmost element of the stack doesn't match the closing bracket,
        // the string is not a valid parentheses string
        return false;
      }
    } else {
      // Opening bracket
      stack.push(char);
    }
  }

  return stack.length === 0;
}




    