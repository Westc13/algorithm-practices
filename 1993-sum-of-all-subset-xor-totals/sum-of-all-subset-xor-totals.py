class Solution:
    def subsetXORSum(self, nums: List[int]) -> int:
        def helper(idx, curr_xor):
            if idx == len(nums):
                return curr_xor
            include_curr = helper(idx + 1, curr_xor ^ nums[idx])
            exclude_curr = helper(idx + 1, curr_xor)
            return include_curr + exclude_curr
        return helper(0,0)