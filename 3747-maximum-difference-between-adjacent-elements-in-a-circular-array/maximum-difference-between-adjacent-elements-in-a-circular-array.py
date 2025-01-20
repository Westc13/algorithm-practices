class Solution:
    def maxAdjacentDistance(self, nums: List[int]) -> int:
        max_distance = 0

        for i in range(len(nums)):
            current_distance = abs(nums[i] - nums[i - 1])
            max_distance = max(max_distance, current_distance)
        return max_distance
                