class Solution:
    def captureForts(self, forts: List[int]) -> int:
        n = len(forts)
        max_captured = 0
        for i in range(n):
            if forts[i] == 1:
                for j in range(i + 1, n):
                    if forts[j] == -1:
                        if all(f == 0 for f in forts[i + 1: j]):
                            max_captured = max(max_captured, j - i - 1)
                        break
                    elif forts[j] != 0:
                        break
                for j in range(i - 1, -1, -1):
                    if forts[j] == -1:
                        if all(f == 0 for f in forts[j + 1: i]):
                            max_captured = max(max_captured, i - j - 1)
                        break
                    elif forts[j] != 0:
                        break
        return max_captured