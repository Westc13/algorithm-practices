# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isCousins(self, root: Optional[TreeNode], x: int, y: int) -> bool:
        def dfs(node, parent, depth, val):
            if not node:
                return None, None
            if node.val == val:
                return depth, parent
            left = dfs(node.left, node, depth + 1, val)
            if left[0] is not None:
                return left
            return dfs(node.right, node, depth + 1, val)
        depth_x, parent_x = dfs(root, None, 0, x)
        depth_y, parent_y = dfs(root, None, 0, y)

        return depth_x == depth_y and parent_x != parent_y