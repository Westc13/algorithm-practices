class Solution:
    def deleteGreatestValue(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        answer = 0

        while n > 0:
            max_val = float('-inf')

            for i in range(m):
                row = grid[i]
                max_in_row = max(row)
                max_val = max(max_val, max_in_row)
                row.remove(max_in_row)

            answer += max_val
            n -= 1

        return answer
