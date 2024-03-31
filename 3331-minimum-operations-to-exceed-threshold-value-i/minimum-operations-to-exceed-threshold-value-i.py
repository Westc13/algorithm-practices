class Solution:
    def minOperations(self, nums: List[int], k: int) -> int:
        nums.sort()
        return bisect_left(nums, k)