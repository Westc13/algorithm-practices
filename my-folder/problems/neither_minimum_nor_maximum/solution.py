class Solution:
    def findNonMinOrMax(self, nums: List[int]) -> int:
        result = []
        for num in nums:
            if num != max(nums) and num != min(nums):
                result.append(num)
        if len(result) <= 0:
            return -1
        return result[random.randint(0, len(result) - 1)]