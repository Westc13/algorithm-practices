class Solution:
    def sumOfEncryptedInt(self, nums: List[int]) -> int:
        total = 0
        for num in nums:
            num_arr = [int(d) for d in str(num)]
            max_digit = max(num_arr)
            encrypted_num = int(str(max_digit) * len(num_arr))
            total += encrypted_num
        return total