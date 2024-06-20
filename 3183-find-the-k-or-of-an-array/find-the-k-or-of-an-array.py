class Solution:
    def findKOr(self, nums: List[int], k: int) -> int:
        max_bits = max(nums).bit_length()

        result = 0
        
        for bit in range(max_bits):
            count = 0
            for num in nums:
                if num & (1 << bit):
                    count += 1
            if count >= k:
                result |= (1 << bit)
        return result