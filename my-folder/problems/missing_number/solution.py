class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        nums.sort()
        nums_range = [x for x in range(len(nums) + 1)]
        result = [num for num in nums_range if num not in nums]
        return result[0]