class Solution:
    def convertToBase7(self, num: int) -> str:
        if num == 0:
            return '0'
        
        negative = num < 0
        num = abs(num)

        base7 = []

        while num > 0:
            remainder = num % 7
            base7.append(str(remainder))
            num //= 7
        
        base7_str = ''.join(base7[::-1])

        return '-' + base7_str if negative else base7_str