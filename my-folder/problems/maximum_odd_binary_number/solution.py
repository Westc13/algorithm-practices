class Solution:
    def maximumOddBinaryNumber(self, s: str) -> str:
        # ones = s.count('1')
        # zeros = s.count('0')
        # result = '1' * (ones -1) + '0' * zeros + '1'
        # return result
        s_arr = sorted([char for char in s])
        result = ''.join(s_arr[:-1][::-1]) + s_arr[-1]
        return result
        
        