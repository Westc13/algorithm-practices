class Solution:
    def canMakeSquare(self, grid: List[List[str]]) -> bool:
        def check_subgrid(x, y):
            subgrid = [grid[x][y], grid[x][y+1], grid[x+1][y], grid[x+1][y+1]]
            b_count = subgrid.count('B')
            w_count = subgrid.count('W')

            return b_count >= 3 or w_count >= 3

        for i in range(2):
            for j in range(2):
                if check_subgrid(i, j):
                    return True
        return False