class Solution:
    def pivotInteger(self, n: int) -> int:
        total_sum = (n * (n + 1)) // 2

        for x in range(1, n + 1):
            left_sum = sum(range(1, x + 1))
            right_sum = sum(range(x, n+1))

            if left_sum == right_sum:
                return x
        return -1