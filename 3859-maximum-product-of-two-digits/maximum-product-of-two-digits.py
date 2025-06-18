class Solution:
    def maxProduct(self, n: int) -> int:
        digits = [int(digit) for digit in str(n)]
        digits_sorted = sorted(digits)
        return digits_sorted[-1] * digits_sorted[-2]