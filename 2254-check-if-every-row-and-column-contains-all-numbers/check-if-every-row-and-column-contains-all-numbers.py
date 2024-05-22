class Solution:
    def checkValid(self, matrix: List[List[int]]) -> bool:
        n = len(matrix)

        for row in matrix:
            if set(row) != set(range(1, n+1)):
                return False
        for col in range(n):
            if set(matrix[row][col] for row in range(n)) != set(range(1, n+1)):
                return False
        return True