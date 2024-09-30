class Solution:
    def maxWidthOfVerticalArea(self, points: List[List[int]]) -> int:
        unique_x = set()
        for point in points:
            unique_x.add(point[0])

        sorted_x = sorted(unique_x)

        max_width = 0

        for i in range(1, len(sorted_x)):
            current_gap = sorted_x[i] - sorted_x[i - 1]
            if current_gap > max_width:
                max_width = current_gap
        
        return max_width