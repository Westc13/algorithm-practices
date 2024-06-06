# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def increasingBST(self, root: TreeNode) -> TreeNode:
        def in_order_traversal(node):
            if not node:
                return
            in_order_traversal(node.left)
            nodes.append(node)
            in_order_traversal(node.right)
        
        nodes = []
        in_order_traversal(root)

        dummy = TreeNode(-1)
        current = dummy
        for node in nodes:
            node.left = None
            current.right = node
            current = node
        return dummy.right