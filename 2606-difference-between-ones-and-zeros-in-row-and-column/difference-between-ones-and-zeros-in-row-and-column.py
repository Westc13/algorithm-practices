class Solution:
    def onesMinusZeros(self, grid: List[List[int]]) -> List[List[int]]:
        m, n = len(grid), len(grid[0])

        onesRow = [sum(row) for row in grid]
        onesCol = [sum(grid[i][j] for i in range(m)) for j in range(n)]
        diff = [[2 * onesRow[i] + 2 * onesCol[j] - m - n for j in range(n)] for i in range(m)]
        return diff