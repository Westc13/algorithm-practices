class Solution:
    def hasIncreasingSubarrays(self, nums: List[int], k: int) -> bool:
        def is_strict_increasing(start, length):
            for i in range(start, start + length - 1):
                if nums[i] >= nums[i + 1]:
                    return False
            return True
        n = len(nums)

        for a in range(n - 2 * k + 1):
            if is_strict_increasing(a, k):
                if is_strict_increasing(a + k, k):
                    return True
        return False