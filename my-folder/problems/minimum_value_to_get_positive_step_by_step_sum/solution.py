class Solution:
    def minStartValue(self, nums: List[int]) -> int:
        min_start = 1
        current_sum = 0
        for num in nums:
            current_sum += num
            if current_sum < 1:
                min_start = max(min_start, -current_sum + 1)
        return min_start