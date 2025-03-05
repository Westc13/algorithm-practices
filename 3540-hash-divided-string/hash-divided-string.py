class Solution:
    def stringHash(self, s: str, k: int) -> str:
        result = ''
        n = len(s)
        for i in range(0, n, k):
            substring = s[i: i+k]
            total = sum(ord(ch) - ord('a') for ch in substring)
            hashed_char = chr((total % 26) + ord('a'))
            result += hashed_char
        return result