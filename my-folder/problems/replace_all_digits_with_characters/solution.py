class Solution:
    def replaceDigits(self, s: str) -> str:
        i = 1
        while i < len(s):
            digit_char = chr(ord(s[i-1]) + int(s[i]))
            s = s[:i] + digit_char + s[i+1:]
            i +=2
        return s