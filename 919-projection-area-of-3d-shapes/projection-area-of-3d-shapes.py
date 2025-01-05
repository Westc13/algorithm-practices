class Solution:
    def projectionArea(self, grid: List[List[int]]) -> int:
        top_projection = sum(1 for row in grid for cell in row if cell > 0)
        front_projection = sum(max(row) for row in grid)

        side_projection = sum(max(column) for column in zip(*grid))

        return top_projection + front_projection + side_projection