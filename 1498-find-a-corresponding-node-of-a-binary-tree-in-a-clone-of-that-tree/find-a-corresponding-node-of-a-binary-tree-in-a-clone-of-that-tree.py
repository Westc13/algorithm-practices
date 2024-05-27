# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def getTargetCopy(self, original: TreeNode, cloned: TreeNode, target: TreeNode) -> TreeNode:
        if not original:
            return None
        if original == target:
            return cloned

        left_side = self.getTargetCopy(original.left, cloned.left, target)
        if left_side:
            return left_side
        return self.getTargetCopy(original.right, cloned.right, target)