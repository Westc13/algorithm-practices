class Solution:
    def distinctAverages(self, nums: List[int]) -> int:
        averages = []
        while nums:
            averages.append((max(nums) + min(nums)) / 2)
            nums.remove(max(nums))
            nums.remove(min(nums))
        output = set(averages)
        return len(list(output))