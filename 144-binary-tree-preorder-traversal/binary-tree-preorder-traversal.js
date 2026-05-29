/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    /* const result = [];

    const helper = function(node) {
        if (node === null) return;
        result.push(node.val);
        helper(node.left);
        helper(node.right);
    }
    helper(root);
    return result; */

    if (root === null) return [];
    const stack = [root];
    const result = [];

    while (stack.length !== 0) {
        let node = stack.pop()
        result.push(node.val);
        if (node.right) {
            stack.push(node.right);
        }
        if (node.left) {
            stack.push(node.left)
        }

    }
    return result;

};