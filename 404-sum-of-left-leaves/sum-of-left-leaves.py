# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumOfLeftLeaves(self, root: Optional[TreeNode]) -> int:
        def is_leaf(node):
            return node is not None and node.left is None and node.right is None

        if root is None:
            return 0
        
        left_leaves_sum = 0

        if root.left:
            if is_leaf(root.left):
                left_leaves_sum += root.left.val
            else:
                left_leaves_sum += self.sumOfLeftLeaves(root.left)
        left_leaves_sum += self.sumOfLeftLeaves(root.right)

        return left_leaves_sum