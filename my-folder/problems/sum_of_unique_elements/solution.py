class Solution:
    def sumOfUnique(self, nums: List[int]) -> int:
        nums_count = {}
        unique_nums = []
        for num in nums:
            if num in nums_count:
                nums_count[num] += 1
            else:
                nums_count[num] = 1
        for key, value in nums_count.items():
            if value == 1:
                unique_nums.append(key)
        return sum(unique_nums)
