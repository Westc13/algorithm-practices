class Solution:
    def reverseDegree(self, s: str) -> int:
        reverse_degree = 0
        for i, c in enumerate(s):
            reverse_index = 26 - (ord(c) - ord('a'))
            reverse_degree += reverse_index * (i + 1)
        return reverse_degree
