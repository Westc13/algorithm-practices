class Solution:
    def findMissingAndRepeatedValues(self, grid: List[List[int]]) -> List[int]:
        n = len(grid)
        counts = [0] * (n * n + 1)

        for row in grid:
            for num in row:
                counts[num] += 1
        a = b = 0
        for i in range(1, n * n + 1):
            if counts[i] == 2:
                a = i
            elif counts[i] == 0:
                b = i
        return [a, b]