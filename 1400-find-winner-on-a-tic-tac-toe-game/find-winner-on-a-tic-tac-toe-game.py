class Solution:
    def tictactoe(self, moves: List[List[int]]) -> str:
        grid = [['' for _ in range(3)] for _ in range(3)]

        for index, move in enumerate(moves):
            row, col = move
            if index % 2 == 0:
                grid[row][col] = 'X'
            else:
                grid[row][col] = 'O'

            if self.check_winner(grid, 'X'):
                return 'A'
            elif self.check_winner(grid, 'O'):
                return 'B'
        if len(moves) == 9:
            return 'Draw'
        return 'Pending'

    def check_winner(self, grid, player):
        for i in range(3):
            if all(grid[i][j] == player for j in range(3)) or all(grid[j][i] == player for j in range(3)):
                return True
        if(grid[0][0] == player and grid[1][1] == player and grid[2][2] == player) or (grid[0][2] == player and grid[1][1] == player and grid[2][0] == player):
            return True
        return False