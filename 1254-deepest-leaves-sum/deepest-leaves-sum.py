# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def deepestLeavesSum(self, root: Optional[TreeNode]) -> int:
        def dfs(node, depth):
            nonlocal max_depth, total_sum
            if not node:
                return
            if not node.left and not node.right:
                if depth > max_depth:
                    max_depth = depth
                    total_sum = node.val
                elif depth == max_depth:
                    total_sum += node.val
                return
            dfs(node.left, depth + 1)
            dfs(node.right, depth + 1)
        max_depth = 0
        total_sum = 0
        dfs(root, 0)
        return total_sum