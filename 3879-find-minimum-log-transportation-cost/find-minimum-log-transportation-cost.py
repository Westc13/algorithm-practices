class Solution:
    def minCuttingCost(self, n: int, m: int, k: int) -> int:
        if n <= k and m <= k:
            return 0
        elif n > k and m <= k:
            return (n - k) * k
        elif n <= k and m > k:
            return (m - k) * k
        else:
            return (n - k) * k + (m - k) * k