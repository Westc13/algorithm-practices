class Solution:
    def minimumCost(self, nums: List[int]) -> int:
        n = len(nums)
        result = float('inf')
        lowest = nums[n-1]
        for i in range(n-2, 0, -1):
            result = min(result, nums[i] + lowest)
            lowest = min(lowest, nums[i])
        return result + nums[0]