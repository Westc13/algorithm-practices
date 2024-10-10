class Solution:
    def dominantIndex(self, nums: List[int]) -> int:
        largest = max(nums)
        largest_index = nums.index(largest)
        for num in nums:
            if num != largest and largest < num * 2:
                return -1
        return largest_index