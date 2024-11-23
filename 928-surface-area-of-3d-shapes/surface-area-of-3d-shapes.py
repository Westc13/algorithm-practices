class Solution:
    def surfaceArea(self, grid: List[List[int]]) -> int:
        n = len(grid)
        total_area = 0
        for i in range(n):
            for j in range(n):
                if grid[i][j] > 0:
                    total_area += 2
                    total_area += grid[i][j] * 4
                    if i > 0:
                        total_area -= min(grid[i][j], grid[i-1][j]) * 2
                    if j > 0:
                        total_area -= min(grid[i][j], grid[i][j-1]) * 2
        return total_area