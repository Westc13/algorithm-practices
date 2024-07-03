# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def leafSimilar(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:
        def getLeafSequence(node: Optional[TreeNode]) -> List[int]:
            if not node:
                return []
            if not node.left and not node.right:
                return [node.val]
            return getLeafSequence(node.left) + getLeafSequence(node.right)
        leafSequence1 = getLeafSequence(root1)
        leafSequence2 = getLeafSequence(root2)

        return leafSequence1 == leafSequence2