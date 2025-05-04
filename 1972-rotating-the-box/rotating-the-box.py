class Solution:
    def rotateTheBox(self, boxGrid: List[List[str]]) -> List[List[str]]:
        m, n = len(boxGrid), len(boxGrid[0])
    
        for row in boxGrid:
            write = n - 1
            for col in range(n - 1, -1, -1):
                if row[col] == '*':
                    write = col - 1 
                elif row[col] == '#':
                    if col != write:
                        row[write], row[col] = '#', '.'
                    write -= 1
        
        rotated = [[boxGrid[row][col] for row in range(m - 1, -1, -1)] for col in range(n)]
        
        return rotated