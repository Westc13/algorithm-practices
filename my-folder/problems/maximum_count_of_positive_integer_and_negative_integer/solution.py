class Solution:
    def maximumCount(self, nums: List[int]) -> int:
        pos_nums = [num for num in nums if num > 0]
        neg_nums = [num for num in nums if num < 0]
        if len(pos_nums) > len(neg_nums):
            return len(pos_nums)
        return len(neg_nums)
        