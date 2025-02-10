class Solution:
    def furthestDistanceFromOrigin(self, moves: str) -> int:
        count_L = moves.count('L')
        count_R = moves.count('R')
        count_blank = moves.count('_')
        return abs(count_L - count_R) + count_blank