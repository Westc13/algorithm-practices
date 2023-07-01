class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        counts = {}
        sorted_nums = sorted(nums)
        for i, num in enumerate(sorted_nums):
            if num not in counts:
                counts[num] = i
        res = [counts[num] for num in nums]
        return res

            