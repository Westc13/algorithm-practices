class Solution:
    def hasTrailingZeros(self, nums: List[int]) -> bool:
        count_even = sum(1 for num in nums if num % 2 == 0)
        return count_even >= 2