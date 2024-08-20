# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def getMinimumDifference(self, root: Optional[TreeNode]) -> int:
        values = []

        def inorder_traversal(node):
            if node is None:
                return
            inorder_traversal(node.left)
            values.append(node.val)
            inorder_traversal(node.right)

        inorder_traversal(root)

        min_diff = float('inf')

        for i in range(1, len(values)):
            min_diff = min(min_diff, values[i] - values[i - 1])
        return min_diff