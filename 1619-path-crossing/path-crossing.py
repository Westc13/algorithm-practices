class Solution:
    def isPathCrossing(self, path: str) -> bool:
        x, y = 0, 0
        visited = {(x,y)}

        directions = {'N': (0,1), 'S': (0, -1), 'E': (1, 0), 'W': (-1,0)}

        for direcction in path:
            dx, dy = directions[direcction]
            x += dx
            y += dy

            if (x,y) in visited:
                return True
            visited.add((x,y))
        return False