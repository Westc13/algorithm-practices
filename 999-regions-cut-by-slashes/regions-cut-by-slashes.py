class UnionFind:
    def __init__(self, size):
        self.parent = list(range(size))
    
    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
    
    def union(self, x, y):
        self.parent[self.find(x)] = self.find(y)


class Solution:
    def regionsBySlashes(self, grid: List[str]) -> int:
        n = len(grid)
        size = n * n * 4
        uf = UnionFind(size)
        
        for r in range(n):
            for c in range(n):
                index = (r * n + c) * 4
                ch = grid[r][c]


                if ch == ' ':
                    uf.union(index + 0, index + 1)
                    uf.union(index + 1, index + 2)
                    uf.union(index + 2, index + 3)
                elif ch == '/':
                    uf.union(index + 0, index + 3)
                    uf.union(index + 1, index + 2)
                elif ch == '\\':
                    uf.union(index + 0, index + 1)
                    uf.union(index + 2, index + 3)
                
                if r + 1 < n:
                    bottom = ((r + 1) * n + c) * 4 + 0
                    uf.union(index + 2, bottom)
                if c + 1 < n:
                    right = (r * n + c + 1) * 4 + 3
                    uf.union(index + 1, right)
                if r - 1 >= 0:
                    top = ((r - 1) * n + c) * 4 + 2
                    uf.union(index + 0, top)
                if c - 1 >= 0:
                    left = (r * n + c - 1) * 4 + 1
                    uf.union(index + 3, left)
        
    
        regions = set()
        for i in range(size):
            regions.add(uf.find(i))
        return len(regions)
