class Solution:
    def thousandSeparator(self, n: int) -> str:
        str_n = str(n)[::-1]
        result = []
        for i, digit in enumerate(str_n, 1):
            result.append(digit)
            if i % 3 == 0 and i != len(str_n):
                result.append('.')
        return ''.join(result[::-1])