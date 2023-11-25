class Solution:
    def nearestValidPoint(self, x: int, y: int, points: List[List[int]]) -> int:
        valids = []
        distances = []
        
        for i, point in enumerate(points):
            if point[0] == x or point[1] == y:
                valids.append(point)
                distances.append(abs(point[0] - x) + abs(point[1] - y))
        
        if not valids:
            return -1

        min_distance = min(distances)
        for i, distance in enumerate(distances):
            if distance == min_distance:
                return points.index(valids[i])
        
        return -1