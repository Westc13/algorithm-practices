class Solution:
    def countHillValley(self, nums: List[int]) -> int:
        count = 0
        last_counted_index = 0

        for i in range(1, len(nums) -1):
            if nums[i] == nums[i+1]:
                continue
            if nums[i] > nums[last_counted_index] and nums[i] > nums[i + 1]:
                count += 1
            elif nums[i] < nums[last_counted_index] and nums[i] < nums[i + 1]:
                count += 1
            last_counted_index = i
        return count