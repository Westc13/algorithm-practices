class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:
        def process_str(s):
            stack = []
            for char in s:
                if char == '#':
                    if stack:
                        stack.pop()
                else:
                    stack.append(char)
            return ''.join(stack)
        
        return process_str(s) == process_str(t)