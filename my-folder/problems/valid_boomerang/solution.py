class Solution:
    def isBoomerang(self, points: List[List[int]]) -> bool:
        x1, y1 = points[0]
        x2, y2 = points[1]
        x3, y3 = points[2]

        slope1 = (y2 - y1) / (x2 - x1) if x2 - x1 != 0 else float('inf')
        slope2 = (y3 - y2) / (x3 - x2) if x3 - x2 != 0 else float('inf')
        slope3 = (y1 - y3) / (x1 - x3) if x1 - x3 != 0 else float('inf')

        return slope1 != slope2 and slope2 != slope3 and slope1 != slope3