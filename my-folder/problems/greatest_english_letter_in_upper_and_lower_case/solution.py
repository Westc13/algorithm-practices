class Solution:
    def greatestLetter(self, s: str) -> str:
        alphabets = list(string.ascii_lowercase)
        result = []
        for char in s:
            if char.upper() in s and char.lower() in s:
                result.append(char.upper())
        if len(result) == 0:
            return ""
        else:
            return max(result)