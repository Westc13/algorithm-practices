class Solution:
    def missingInteger(self, nums: List[int]) -> int:
        longest_prefix = [nums[0]]
        for i in range(1, len(nums)):
            if nums[i] == nums[i - 1] + 1:
                longest_prefix.append(nums[i])
            else:
                break
        prefix_sum = sum(longest_prefix)

        x = prefix_sum
        while x in nums:
            x += 1
        return x