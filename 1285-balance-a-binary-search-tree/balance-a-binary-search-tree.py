# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorder_traversal(self, root: Optional[TreeNode], elements: List[int]):
        if not root:
            return
        self.inorder_traversal(root.left, elements)
        elements.append(root.val)
        self.inorder_traversal(root.right, elements)
    def sorted_list_to_bst(self, nums: List[int]) -> Optional[TreeNode]:
        if not nums:
            return None
        mid = len(nums) // 2
        root = TreeNode(nums[mid])
        root.left = self.sorted_list_to_bst(nums[:mid])
        root.right = self.sorted_list_to_bst(nums[mid + 1:])
        return root
    def balanceBST(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        elements = []
        self.inorder_traversal(root, elements)
        return self.sorted_list_to_bst(elements)
        