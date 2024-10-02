class Solution:
    def minElement(self, nums: List[int]) -> int:
        replaced_nums = [sum(int(digit) for digit in str(num)) for num in nums]
        return min(replaced_nums)