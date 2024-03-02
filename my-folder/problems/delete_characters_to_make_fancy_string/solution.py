class Solution:
    def makeFancyString(self, s: str) -> str:
        if len(s) <= 2:
            return s
        result = [s[0], s[1]]

        for i in range(2, len(s)):
            if s[i] == s[i-1] == s[i-2]:
                continue
            result.append(s[i])
        return ''.join(result)