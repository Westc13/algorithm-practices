class Solution:
    def judgeCircle(self, moves: str) -> bool:
        horizontal = 0
        vertical = 0
        for move in moves:
            if move == 'L':
                horizontal -= 1
            elif move == 'R':
                horizontal += 1
            elif move == 'U':
                vertical += 1
            elif move == 'D':
                vertical -= 1
        if horizontal == 0 and vertical == 0:
            return True
        return False