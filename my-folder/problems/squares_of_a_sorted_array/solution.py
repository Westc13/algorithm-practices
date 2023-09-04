class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        sqr_nums = []
        for num in nums:
            sqr_nums.append(num**2)
        return sorted(sqr_nums)
        