class Solution:
    def getMaximumXor(self, nums: List[int], maximumBit: int) -> List[int]:
        max_num = (1 << maximumBit) - 1
        xor_value = 0
        result = []

        for num in nums:
            xor_value ^= num
        
        for i in range(len(nums) - 1, -1, -1):
            result.append(max_num ^ xor_value)
            xor_value ^= nums[i]
        return result