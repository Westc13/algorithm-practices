/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    /* const result = [];

    function dfs(node) {
        if (!node) return;

        result.push(node.val);
        for (let child of node.children) {
            dfs(child);
        }
    }
    dfs(root);
    return result; */
    if (!root) return [];
    const stack = [root];
    const result = [];
    while (stack.length !== 0) {
        let node = stack.pop();
        result.push(node.val);
        for (let i = node.children.length - 1; i >= 0; i--) {
            stack.push(node.children[i]);
        }
    }
    return result;
};