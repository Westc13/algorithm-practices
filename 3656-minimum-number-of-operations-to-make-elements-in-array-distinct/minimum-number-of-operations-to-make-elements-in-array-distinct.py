class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        operations = 0
        while len(nums) != len(set(nums)):
            nums = nums[3:] if len(nums) >= 3 else []
            operations += 1
        return operations