class Solution:
    def minOperations(self, nums: List[int], k: int) -> int:
        current_xor = 0
        for num in nums:
            current_xor ^= num
        if current_xor == k:
            return 0
        target = current_xor ^ k

        return bin(target).count('1')