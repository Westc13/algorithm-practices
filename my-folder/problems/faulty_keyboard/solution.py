class Solution:
    def finalString(self, s: str) -> str:
        s_arr = [*s]
        result = []
        for char in s_arr:
            if char != 'i':
                result.append(char)
            else:
                result.reverse()
        return ''.join(result)
