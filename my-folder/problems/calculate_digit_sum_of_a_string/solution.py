class Solution:
    def digitSum(self, s: str, k: int) -> str:
        s_digit = [int(d) for d in s]
        output = ''
        while len(s_digit) > k:
            result = []
            for i in range(0, len(s_digit), k):
                result += [int(d) for d in str(sum(s_digit[i:i+k]))]
            s_digit = result
        output = ''.join(str(i) for i in s_digit)
        return output