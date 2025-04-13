class Solution:
    def executeInstructions(self, n: int, startPos: List[int], s: str) -> List[int]:
        m = len(s)
        answer = []
        moves = {'L': (0, -1), 'R': (0, 1), 'U': (-1, 0), 'D': (1, 0)}
        for i in range(m):
            row, col = startPos
            steps = 0

            for j in range(i, m):
                dr, dc = moves[s[j]]
                new_row = row + dr
                new_col = col + dc

                if 0 <= new_row < n and 0 <= new_col < n:
                    row, col = new_row, new_col
                    steps += 1
                else:
                    break
            answer.append(steps)
        return answer