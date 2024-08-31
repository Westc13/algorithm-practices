# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findMode(self, root: Optional[TreeNode]) -> List[int]:
        # def inorder(node: TreeNode):
        #     if not node:
        #         return

        #     inorder(node.left)
        #     handle_value(node.val)
        #     inorder(node.right)
        # def handle_value(val: int):
        #     nonlocal current_val, current_count, max_count, modes

        #     if val != current_val:
        #         current_val = val
        #         current_count = 0
        #     current_count += 1

        #     if current_count > max_count:
        #         max_count = current_count
        #         modes = [val]
        
        #     elif current_count == max_count:
        #         modes.append(val)
        
        # current_val = None
        # current_count = 0
        # max_count = 0
        # modes = []

        # inorder(root)

        # return modes

        def morris_inorder_traversal(handle_value):
            current = root
            while current:
                if not current.left:
                    handle_value(current.val)
                    current = current.right
                else:
                    predecessor = current.left
                    while predecessor.right and predecessor.right != current:
                        predecessor = predecessor.right
                    if not predecessor.right:
                        predecessor.right = current
                        current = current.left
                    else:
                        predecessor.right = None
                        handle_value(current.val)
                        current = current.right
        def first_pass(val):
            nonlocal current_val, current_count, max_count
            if val != current_val:
                current_val = val
                current_count = 0
            current_count += 1
            if current_count > max_count:
                max_count = current_count
        def second_pass(val):
            nonlocal current_val, current_count
            if val != current_val:
                current_val = val
                current_count = 0
            current_count += 1
            if current_count == max_count:
                modes.append(val)
        current_val = None
        current_count = 0
        max_count = 0

        morris_inorder_traversal(first_pass)

        current_val = None
        current_count = 0
        modes = []

        morris_inorder_traversal(second_pass)

        return modes