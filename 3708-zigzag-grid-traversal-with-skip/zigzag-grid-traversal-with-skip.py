class Solution:
    def zigzagTraversal(self, grid: List[List[int]]) -> List[int]:
        result = []
        rows = len(grid)
        cols = len(grid[0])
        left_to_right = True  
        global_index = 0 

        for r in range(rows):
            if left_to_right:
                for c in range(cols):
                    if global_index % 2 == 0:
                        result.append(grid[r][c])
                    global_index += 1
            else:
                for c in range(cols - 1, -1, -1):
                    if global_index % 2 == 0:
                        result.append(grid[r][c])
                    global_index += 1
            
            left_to_right = not left_to_right

        return result