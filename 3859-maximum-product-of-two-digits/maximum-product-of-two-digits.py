class Solution:
    def maxProduct(self, n: int) -> int:
        digits = [int(digit) for digit in str(n)]
        first = second = 0
        for d in digits:
            if d > first:
                first, second = d, first
            elif d > second:
                second = d
        return first * second