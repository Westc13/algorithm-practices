class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        sorted_nums = sorted(nums)
        result = 0
        filtered_nums = []
        for i in range(len(sorted_nums)):
            if i % 2 == 0:
                filtered_nums.append(sorted_nums[i])
        result = sum(filtered_nums)
        return result