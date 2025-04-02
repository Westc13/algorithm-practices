class Solution:
    def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:
        result = []
        path = []

        def dfs(node):
            path.append(node)

            if node == len(graph) - 1:
                result.append(path[:])
            else:
                for neighbor in graph[node]:
                    dfs(neighbor)
            path.pop()
        dfs(0)
        return result