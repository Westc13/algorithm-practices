class Solution:
    def maxSum(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        max_sum = float('-inf')

        for i in range(m-2):
            for j in range(n-2):
                top = grid[i][j] + grid[i][j+1] + grid[i][j+2]
                middle = grid[i+1][j+1]
                bottom = grid[i+2][j] + grid[i+2][j+1] + grid[i+2][j+2]
                total = top + middle + bottom

                max_sum = max(max_sum, total)
        return max_sum