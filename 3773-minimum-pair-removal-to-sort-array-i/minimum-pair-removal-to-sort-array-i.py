class Solution:
    def minimumPairRemoval(self, nums: List[int]) -> int:
        res = 0
        if nums == sorted(nums):
            return res
        else:
            while nums != sorted(nums):
                min_sum = float('inf')
                min_index = 0
                for i in range(len(nums) - 1):
                    s = nums[i] + nums[i + 1]
                    if s < min_sum:
                        min_sum = s
                        min_index = i
                nums[min_index] = nums[min_index] + nums[min_index + 1]
                nums.pop(min_index + 1)
                res += 1
        return res
