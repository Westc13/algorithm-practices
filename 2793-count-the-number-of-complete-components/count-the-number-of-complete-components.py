class Solution:
    def countCompleteComponents(self, n: int, edges: List[List[int]]) -> int:
        graph = defaultdict(list)
        for u, v in edges:
            graph[u].append(v)
            graph[v].append(u)

        visited = [False] * n

        def dfs(node, nodes_set, edge_count):
            visited[node] = True
            nodes_set.append(node)
            for neighbor in graph[node]:
                edge_count[0] += 1 
                if not visited[neighbor]:
                    dfs(neighbor, nodes_set, edge_count)

        complete_components = 0

        for i in range(n):
            if not visited[i]:
                nodes = []
                edge_count = [0]
                dfs(i, nodes, edge_count)
                k = len(nodes)  
                total_edges = edge_count[0] // 2  
                if total_edges == k * (k - 1) // 2:
                    complete_components += 1

        return complete_components