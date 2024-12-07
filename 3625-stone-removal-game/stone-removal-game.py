class Solution:
    def canAliceWin(self, n: int) -> bool:
        stones_to_remove = list(range(10, 0, -1))
        turn = 0
        for stones in stones_to_remove:
            if n >= stones:
                n -= stones
                turn = 1 - turn
            else:
                break
        return turn == 1