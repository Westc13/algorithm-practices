class Solution:
    def sortArrayByParityII(self, nums: List[int]) -> List[int]:
        odd_nums = [num for num in nums if num % 2 != 0]
        even_nums = [num for num in nums if num %2 == 0]
        return [sub[item] for item in range(len(odd_nums)) for sub in [even_nums, odd_nums]]
        