class Solution:
    def countOdds(self, low: int, high: int) -> int:
        def odd_count(n):
            return (n // 2) + 1 if n % 2 != 0 else n // 2
        return odd_count(high) - odd_count(low - 1)