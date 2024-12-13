class Solution:
    def minOperations(self, nums: List[int], k: int) -> int:
        if any(num < k for num in nums):
            return -1
        nums.sort(reverse=True)
        operations = 0
        current_max = nums[0]

        for num in nums:
            if num > k and num < current_max:
                current_max = num
                operations += 1
        if current_max > k:
            operations += 1
        return operations