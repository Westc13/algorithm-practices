class Solution:
    def winningPlayer(self, x: int, y: int) -> str:
        max_turns = min(x, y // 4)
        return 'Alice' if max_turns % 2 == 1 else 'Bob'