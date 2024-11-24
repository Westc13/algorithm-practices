class Solution:
    def minimumSumSubarray(self, nums: List[int], l: int, r: int) -> int:
        n = len(nums)
        min_sum = float('inf')
        found = False

        for k in range(l, r + 1):
            current_sum = sum(nums[:k])
            if current_sum > 0:
                min_sum = min(min_sum, current_sum)
                found = True
            for i in range(k, n):
                current_sum += nums[i] - nums[i - k]
                if current_sum > 0:
                    min_sum = min(min_sum, current_sum)
                    found = True
        return min_sum if found else -1