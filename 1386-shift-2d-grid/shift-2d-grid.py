class Solution:
    def shiftGrid(self, grid: List[List[int]], k: int) -> List[List[int]]:
        m, n = len(grid), len(grid[0])

        flat_grid = [grid[i][j] for i in range(m) for j in range(n)]

        total_elements = m * n

        k = k % total_elements

        shifted_grid = flat_grid[-k:] + flat_grid[:-k]

        new_grid = [[shifted_grid[i * n + j] for j in range(n)] for i in range(m)]

        return new_grid