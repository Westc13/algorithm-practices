class Solution:
    def getHappyString(self, n: int, k: int) -> str:
        happy_strings = []
        def backtrack(current):
            if len(current) == n:
                happy_strings.append(current)
                return
            for ch in 'abc':
                if not current or current[-1] != ch:
                    backtrack(current + ch)
        backtrack('')
        return happy_strings[k - 1] if k <= len(happy_strings) else ""