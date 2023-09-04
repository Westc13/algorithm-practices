class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        count = 0
        while any(nums):
            min_non_zero = min(num for num in nums if num>0)
            for i in range(len(nums)):
                if nums[i]>0:
                    nums[i] -= min_non_zero
            count += 1
        return count