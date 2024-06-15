class Solution:
    def maximumStrongPairXor(self, nums: List[int]) -> int:
        n = len(nums)
        max_xor = 0
        for i in range(n):
            for j in range(i, n):
                x = nums[i]
                y = nums[j]
                if abs(x-y) <= min(x,y):
                    max_xor = max(max_xor, x^y)
        return max_xor