class Solution:
    def maxCoins(self, piles: List[int]) -> int:
        piles.sort(reverse=True)
        n = len(piles) // 3
        return sum(piles[i] for i in range(1, 2 * n, 2))