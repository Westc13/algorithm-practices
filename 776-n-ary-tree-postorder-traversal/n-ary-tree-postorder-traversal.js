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
    /* if (root === null) return [];
    let result = [];
    for (let child of root.children) {
        result.push(...postorder(child));
    }
    result.push(root.val);
    return result; */

    if (root === null) return [];
    
    let result = [];
    let stack = [root];

    while (stack.length > 0) {
        let node = stack.pop();
        result.push(node.val);

        for (let child of node.children) {
            stack.push(child);
        }
    }
    return result.reverse();
};