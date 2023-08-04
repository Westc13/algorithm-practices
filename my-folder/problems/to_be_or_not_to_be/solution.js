/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: function(diffVal){
            if (val !== diffVal){
                throw new Error('Not Equal')
            }
            return true
        },
        notToBe: function(diffVal){
            if (val !== diffVal){
                return true
            }
            throw new Error('Equal')
        }
    }

    
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */