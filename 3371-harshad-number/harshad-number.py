class Solution:
    def sumOfTheDigitsOfHarshadNumber(self, x: int) -> int:
        digits = [int(d) for d in str(x)]
        if x % sum(digits) == 0:
            return sum(digits)
        return -1