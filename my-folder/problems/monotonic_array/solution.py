class Solution:
    def isMonotonic(self, nums: List[int]) -> bool:
        nums_1 = sorted(nums)
        nums_2 = sorted(nums)[::-1]
        if nums == nums_1 or nums == nums_2:
            return True
        return False