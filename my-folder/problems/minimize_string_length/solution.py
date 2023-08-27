class Solution:
    def minimizedStringLength(self, s: str) -> int:
        results = []
        for char in s:
            if char not in results:
                results.append(char)
        return len(''.join(results))
        