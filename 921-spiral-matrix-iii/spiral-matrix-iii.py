class Solution:
    def spiralMatrixIII(self, rows: int, cols: int, rStart: int, cStart: int) -> List[List[int]]:
        result = []
        directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]
        steps = 1
        r, c = rStart, cStart
        total_cells = rows * cols
        direction_index = 0

        while len(result) < total_cells:
            for _ in range(2):
                dx, dy = directions[direction_index]
                for _ in range(steps):
                    if 0 <= r < rows and 0 <= c < cols:
                        result.append([r, c])
                        if len(result) == total_cells:
                            return result
                    r += dx
                    c += dy
                direction_index = (direction_index + 1) % 4
            steps += 1
        return result