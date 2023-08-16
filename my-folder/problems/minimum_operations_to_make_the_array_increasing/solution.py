class Solution:
    def minOperations(self, nums: List[int]) -> int:
        result = 0
        for i in range(1, len(nums)):
            if nums[i] <= nums[i-1]:
                diff = nums[i-1] - nums[i] + 1
                result += diff
                nums[i] += diff
        return result
