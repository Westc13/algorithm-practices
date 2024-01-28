class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        n = len(nums)
        all_nums = list(range(1, n+1))
        missing_nums = list(set(all_nums) - set(nums))
        return missing_nums