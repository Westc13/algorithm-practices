# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        # def recurse(node):
        #     if node is None:
        #         return []
        #     return recurse(node.left) + recurse(node.right) + [node.val]
        # return recurse(root)

        if not root:
            return []
        
        stack, result = [root], []

        while stack:
            node = stack.pop()
            result.insert(0, node.val)

            if node.left:
                stack.append(node.left)
            if node.right:
                stack.append(node.right)
        return result