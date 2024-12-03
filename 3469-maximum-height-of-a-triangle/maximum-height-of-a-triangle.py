class Solution:
    def maxHeightOfTriangle(self, red: int, blue: int) -> int:
        result = 0
        for i in range(2):
            colors = [red, blue]
            j, k = 1, i
            while j <= colors[k]:
                colors[k] -= j
                k ^= 1
                result = max(result, j)
                j += 1
        return result
