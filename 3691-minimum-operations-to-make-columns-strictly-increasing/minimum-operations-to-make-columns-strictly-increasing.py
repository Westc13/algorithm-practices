class Solution:
    def minimumOperations(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        total_operations = 0

        for j in range(n):
            for i in range(m - 1):
                if grid[i][j] >= grid[i + 1][j]:
                    increment = grid[i][j] - grid[i + 1][j] + 1
                    total_operations += increment
                    grid[i + 1][j] += increment
        return total_operations