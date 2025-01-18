class Solution:
    def longestAlternatingSubarray(self, nums: List[int], threshold: int) -> int:
        max_length = 0
        current_length = 0

        for i in range(len(nums)):
            if current_length == 0:
                if nums[i] % 2 == 0 and nums[i] <= threshold:
                    current_length = 1
                else:
                    continue
            else:
                if nums[i] <= threshold and nums[i] % 2 != nums[i - 1] % 2:
                    current_length += 1
                else:
                    current_length = 1 if nums[i] % 2 == 0 and nums[i] <= threshold else 0

            max_length = max(max_length, current_length)
        return max_length