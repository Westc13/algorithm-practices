# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def replaceValueInTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if not root:
            return None
        queue = deque([(root, None)])
        root.val = 0

        while queue:
            level = []
            parent_to_children = defaultdict(list)

            for _ in range(len(queue)):
                node, parent = queue.popleft()
                level.append((node, parent))
                if node.left:
                    queue.append((node.left, node))
                    parent_to_children[node].append(node.left)
                if node.right:
                    queue.append((node.right, node))
                    parent_to_children[node].append(node.right)
            
            total = 0
            for node, _ in level:
                if node.left:
                    total += node.left.val
                if node.right:
                    total += node.right.val
            for parent, children in parent_to_children.items():
                sibling_sum = sum(child.val for child in children)
                for child in children:
                    child.val = total - sibling_sum
        return root