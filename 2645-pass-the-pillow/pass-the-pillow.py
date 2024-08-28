class Solution:
    def passThePillow(self, n: int, time: int) -> int:
        cycle_length = 2 * (n - 1)
        position_in_cycle = time % cycle_length
        if position_in_cycle <= n - 1:
            return position_in_cycle + 1
        else:
            return 2 * n - 1 - position_in_cycle