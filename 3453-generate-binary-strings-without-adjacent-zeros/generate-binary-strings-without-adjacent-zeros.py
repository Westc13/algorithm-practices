class Solution:
    def validStrings(self, n: int) -> List[str]:
        def backtrack(current):
            if len(current) == n:
                result.append(current)
                return
            
            backtrack(current + '1')

            if not current or current[-1] == '1':
                backtrack(current + '0')
        result = []
        backtrack('')
        return result