class Solution:
    def splitNum(self, num: int) -> int:
        digits = sorted(str(num))
        num1 = num2 = 0
        turn = True

        for digit in digits:
            if turn:
                num1 = num1*10 + int(digit)
            else:
                num2 = num2*10 + int(digit)
            turn = not turn
        return num1 + num2

        