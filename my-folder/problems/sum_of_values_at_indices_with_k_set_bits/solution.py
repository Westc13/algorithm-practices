class Solution:
    def sumIndicesWithKSetBits(self, nums: List[int], k: int) -> int:
        def count_set_bits(n):
            binary_str = bin(n)[2:]
            return binary_str.count('1')
        total = 0
        for i in range(len(nums)):
            if count_set_bits(i) == k:
                total += nums[i]
        return total