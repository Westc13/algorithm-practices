class Solution:
    def thousandSeparator(self, n: int) -> str:
        str_n = str(n)
        result = ''

        for i in range(len(str_n) - 1, -1, -1):
            result = str_n[i] + result
            if(len(str_n) - i) % 3 == 0 and i != 0:
                result = '.' + result
        return result

        # str_n = str(n)[::-1]
        # result = []
        # for i, digit in enumerate(str_n, 1):
        #     result.append(digit)
        #     if i % 3 == 0 and i != len(str_n):
        #         result.append('.')
        # return ''.join(result[::-1])