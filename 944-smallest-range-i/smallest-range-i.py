class Solution:
    def smallestRangeI(self, nums: List[int], k: int) -> int:
        largest_range = max(nums) - min(nums)
        result = 0
        if (2*k) <= largest_range:
            result = largest_range - (2*k)
            return result
        return result