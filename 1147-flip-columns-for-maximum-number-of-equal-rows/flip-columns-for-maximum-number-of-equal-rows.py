class Solution:
    def maxEqualRowsAfterFlips(self, matrix: List[List[int]]) -> int:
        count = defaultdict(int)

        for row in matrix:
            pattern = tuple(cell ^ row[0] for cell in row)
            count[pattern] += 1
        
        return max(count.values())