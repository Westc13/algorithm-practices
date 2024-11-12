# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findSecondMinimumValue(self, root: Optional[TreeNode]) -> int:
        min_val = root.val
        self.second_min = -1

        def dfs(node):
            if not node:
                return
            if min_val < node.val and (self.second_min == -1 or node.val < self.second_min):
                self.second_min = node.val
            dfs(node.left)
            dfs(node.right)
        dfs(root)

        return self.second_min