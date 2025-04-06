class Solution:
    def minOperations(self, n: int) -> int:
        # return (n // 2) * ((n + 1) // 2)

        arr = [(2 * i) + 1 for i in range(n)]
        target = n
        ops = 0

        for num in arr:
            if num < target:
                ops += target - num
        return ops