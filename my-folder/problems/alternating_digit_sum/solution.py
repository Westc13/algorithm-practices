class Solution:
    def alternateDigitSum(self, n: int) -> int:
        n_digit = list(map(int, str(n)))
        for i in range(1, len(n_digit), 2):
            n_digit[i] = - (n_digit[i])
        return sum(n_digit)


        