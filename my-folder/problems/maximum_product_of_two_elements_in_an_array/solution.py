class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        nums_sorted = sorted(nums)
        return (nums_sorted[-1] - 1) * (nums_sorted[-2] - 1)