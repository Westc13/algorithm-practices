class Solution:
    def minimumPushes(self, word: str) -> int:
        n = len(word)
        presses = 0

        for i in range(n):
            presses += (i // 8) + 1
        return presses