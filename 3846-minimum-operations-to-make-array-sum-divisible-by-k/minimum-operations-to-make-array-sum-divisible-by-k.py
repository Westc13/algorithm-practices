class Solution:
    def minOperations(self, nums: List[int], k: int) -> int:
        min_op = sum(nums) % k
        return min_op