class Solution:
    def countPoints(self, points: List[List[int]], queries: List[List[int]]) -> List[int]:
        result = []

        for cx, cy, r in queries:
            count = 0
            r_squared = r * r

            for x, y in points:
                if (x - cx) ** 2 + (y - cy) ** 2 <= r_squared:
                    count += 1
            result.append(count)
        return result