class Solution:
    def findFarmland(self, land: List[List[int]]) -> List[List[int]]:
        m, n = len(land), len(land[0])
        result = []

        def dfs(r, c, bounds):
            
            if r < 0 or r >= m or c < 0 or c >= n or land[r][c] != 1:
                return
            
            land[r][c] = -1
            
            bounds[2] = max(bounds[2], r)
            bounds[3] = max(bounds[3], c)
            
            dfs(r + 1, c, bounds)
            dfs(r, c + 1, bounds)

        for i in range(m):
            for j in range(n):
                if land[i][j] == 1:
                    
                    bounds = [i, j, i, j]
                    dfs(i, j, bounds)
                    result.append(bounds)

        return result