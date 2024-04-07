class Solution:
    def oddCells(self, m: int, n: int, indices: List[List[int]]) -> int:
        matrix = [[0]*n for _ in range(m)]
        
        for r, c in indices:
            for j in range(n):
                matrix[r][j] += 1
            for i in range(m):
                matrix[i][c] += 1

        odd_count = sum(cell % 2 != 0 for row in matrix for cell in row)

        return odd_count