class Solution:
    def minBitFlips(self, start: int, goal: int) -> int:
        start_bin = bin(start)[2:]
        goal_bin = bin(goal)[2:]
        max_len = max(len(start_bin), len(goal_bin))
        start_bin = start_bin.zfill(max_len)
        goal_bin = goal_bin.zfill(max_len)
        result = 0

        for i in range(max_len):
            if start_bin[i] != goal_bin[i]:
                result += 1
        return result