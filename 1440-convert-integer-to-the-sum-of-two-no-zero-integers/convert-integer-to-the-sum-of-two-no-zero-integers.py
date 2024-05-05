class Solution:
    def getNoZeroIntegers(self, n: int) -> List[int]:
        def is_no_zero_int(num):
            return '0' not in str(num)
        for a in range(1, n):
            b = n - a
            if is_no_zero_int(a) and is_no_zero_int(b):
                return [a, b]
    
    
        