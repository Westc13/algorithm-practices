class Solution:
    def findSmallestSetOfVertices(self, n: int, edges: List[List[int]]) -> List[int]:
        in_degree = set()
        for from_node, to_node in edges:
            in_degree.add(to_node)
        result = [i for i in range(n) if i not in in_degree]
        return result