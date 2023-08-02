class Solution:
    def removeOuterParentheses(self, s: str) -> str:
        stack = []
        result = ''
        start = 0
        for i in range(len(s)):
            if s[i] == "(":
                stack.append(s[i])
            if s[i] == ')':
                stack.pop()
            if not stack:
                result += s[start+1:i]
                start = i + 1
        return result