class Solution:
    def findIndices(self, nums: List[int], indexDifference: int, valueDifference: int) -> List[int]:
        result = [-1, -1]
        n = len(nums)
        for i in range(n):
            for j in range(n):
                if abs(nums[i] - nums[j]) >= valueDifference and abs(i - j) >= indexDifference:
                    result = [i, j]
                    return result
        return result