class Solution:
    def modifiedMatrix(self, matrix: List[List[int]]) -> List[List[int]]:
        m = len(matrix)
        n = len(matrix[0])

        max_in_columns = [-float('inf')] * n
        for j in range(n):
            for i in range(m):
                if matrix[i][j] != -1:
                    max_in_columns[j] = max(max_in_columns[j], matrix[i][j])
        answer = [row[:] for row in matrix]
        for i in range(m):
            for j in range(n):
                if answer[i][j] == -1:
                    answer[i][j] = max_in_columns[j]
        return answer