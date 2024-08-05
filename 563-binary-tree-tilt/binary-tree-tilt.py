# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findTilt(self, root: Optional[TreeNode]) -> int:
        self.total_tilt = 0

        def sum_and_tilt(node: Optional[TreeNode]) -> int:
            if not node:
                return 0
            left_sum = sum_and_tilt(node.left)
            right_sum = sum_and_tilt(node.right)

            tilt = abs(left_sum - right_sum)
            self.total_tilt += tilt

            return node.val + left_sum + right_sum
        sum_and_tilt(root)
        return self.total_tilt