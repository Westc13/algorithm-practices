class Solution:
    def findRelativeRanks(self, score: List[int]) -> List[str]:
        n = len(score)
        result = [''] * n
        
        sorted_indices = sorted(range(n), key=lambda x: score[x], reverse=True)

        for i in range(n):
            if i == 0:
                result[sorted_indices[i]] = 'Gold Medal'
            elif i == 1:
                result[sorted_indices[i]] = 'Silver Medal'
            elif i == 2:
                result[sorted_indices[i]] = 'Bronze Medal'
            else:
                result[sorted_indices[i]] = str(i + 1)
        return result
