class Solution:
    def longestNiceSubstring(self, s: str) -> str:
        def is_nice(sub):
            return all(c.lower() in sub and c.upper() in sub for c in set(sub))
        
        result = ''
        for i in range(len(s)):
            for j in range(i+1, len(s) + 1):
                substring = s[i:j]
                if is_nice(substring) and len(substring) > len(result):
                    result = substring
        return result