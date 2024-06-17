"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""

class Solution:
    def preorder(self, root: 'Node') -> List[int]:
        # def dfs(node):
        #     if not node:
        #         return
        #     result.append(node.val)
        #     for child in node.children:
        #         dfs(child)
        # result = []
        # dfs(root)
        # return result

        if not root:
            return []
        stack, result = [root], []
        while stack:
            node = stack.pop()
            result.append(node.val)
            stack.extend(reversed(node.children))
        return result