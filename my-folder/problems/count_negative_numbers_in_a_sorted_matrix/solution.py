class Solution:
    def countNegatives(self, grid: List[List[int]]) -> int:
        combined = [element for innerlist in grid for element in innerlist]
        count = 0
        for element in combined:
            if element < 0:
                count += 1
        return count
            