class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        unique_nums = sorted(set(nums), reverse=True)

        return unique_nums[2] if len(unique_nums) >=3 else unique_nums[0]