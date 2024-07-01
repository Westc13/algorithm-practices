# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isUnivalTree(self, root: Optional[TreeNode]) -> bool:
        # if not root:
        #     return True
        
        # def dfs(node):
        #     if not node:
        #         return True
        #     if node.val != root.val:
        #         return False
        #     return dfs(node.left) and dfs(node.right)
        # return dfs(root)

        if not root:
            return True
        
        stack = [root]

        while stack:
            node = stack.pop()

            if node.val != root.val:
                return False
            if node.left:
                stack.append(node.left)
            if node.right:
                stack.append(node.right)
        return True