class Solution:
    def findColumnWidth(self, grid: List[List[int]]) -> List[int]:
        m = len(grid)
        n = len(grid[0])

        answer = [0] * n

        for col in range(n):
            max_width = 0
            for row in range(m):
                number_length = len(str(grid[row][col]))
                max_width = max(max_width, number_length)
            answer[col] = max_width
        return answer