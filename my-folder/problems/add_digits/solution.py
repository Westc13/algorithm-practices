class Solution:
    def addDigits(self, num: int) -> int:
        while len(str(num)) > 1:
            num_digits = [int(digit) for digit in str(num)]
            num = sum(num_digits)
        return num
        