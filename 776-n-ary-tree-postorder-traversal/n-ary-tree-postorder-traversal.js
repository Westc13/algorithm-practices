/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    if (root === null) return [];
    let result = [];
    for (let child of root.children) {
        result.push(...postorder(child));
    }
    result.push(root.val);
    return result;
};