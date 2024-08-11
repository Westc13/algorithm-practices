class Solution:
    def winningPlayerCount(self, n: int, pick: List[List[int]]) -> int:
        color_count = [defaultdict(int) for _ in range(n)]

        for player, color in pick:
            color_count[player][color] += 1
        
        winners = 0
        for i in range(n):
            if any(count > i for count in color_count[i].values()):
                winners += 1
        return winners