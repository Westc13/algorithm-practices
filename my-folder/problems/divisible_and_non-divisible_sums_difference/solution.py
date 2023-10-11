class Solution:
    def differenceOfSums(self, n: int, m: int) -> int:
        num1_arr = []
        num2_arr = []
        for num in range(1, n+1):
            if num % m != 0:
                num1_arr.append(num)
            else:
                num2_arr.append(num)
        return sum(num1_arr) - sum(num2_arr)