class Solution:
    def numRookCaptures(self, board: List[List[str]]) -> int:
        rook_position = None
        for i in range(8):
            for j in range(8):
                if board[i][j] == 'R':
                    rook_position = (i,j)
                    break
            if rook_position:
                break
        captures = 0
        rook_x, rook_y = rook_position

        for i in range(rook_x -1, -1, -1):
            if board[i][rook_y] == 'B':
                break
            if board[i][rook_y] == 'p':
                captures += 1
                break
        for i in range(rook_x + 1, 8):
            if board[i][rook_y] == 'B':
                break
            if board[i][rook_y] == 'p':
                captures += 1
                break
        for j in range(rook_y - 1, -1, -1):
            if board[rook_x][j] == 'B':
                break
            if board[rook_x][j] == 'p':
                captures += 1
                break
        for j in range(rook_y + 1, 8):
            if board[rook_x][j] == 'B':
                break
            if board[rook_x][j] == 'p':
                captures += 1
                break
        return captures