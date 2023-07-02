class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        n_str = str(n)
        n_arr = []
        prod = 1
        sum = 0
        for digit in n_str:
            n_arr.append(int(digit))
        for element in n_arr:
            prod *= element
            sum += element
        return prod - sum