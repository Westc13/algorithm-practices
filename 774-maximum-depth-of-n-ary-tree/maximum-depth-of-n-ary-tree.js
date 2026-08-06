/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val === undefined ? null : val;
 *    this.children = children === undefined ? null : children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null) return 0;

    let maxChildDepth = 0;

    for (const child of root.children) {
        const childDepth = maxDepth(child);

        if (childDepth > maxChildDepth) {
            maxChildDepth = childDepth;
        }
    }
    return maxChildDepth + 1;
};