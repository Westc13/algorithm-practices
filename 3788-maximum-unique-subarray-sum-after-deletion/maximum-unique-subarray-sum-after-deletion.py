class Solution:
    def maxSum(self, nums: List[int]) -> int:
        max_sum = max(nums)
        if max_sum <= 0:
            return max_sum
        return sum(max(0, num) for num in set(nums))