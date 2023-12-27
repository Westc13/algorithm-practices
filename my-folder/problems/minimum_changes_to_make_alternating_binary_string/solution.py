class Solution:
    def minOperations(self, s: str) -> int:
        starts_with_0 = sum(1 for i, char in enumerate(s) if i % 2 == int(char))
        starts_with_1 = sum(1 for i, char in enumerate(s) if i % 2 != int(char))
        return min(starts_with_0, starts_with_1)