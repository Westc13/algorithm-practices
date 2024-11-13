class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:
        n = len(nums)
        expected_sum = n * (n + 1) // 2
        expected_square_sum = n * (n + 1) * (2 * n + 1) // 6
        actual_sum = sum(nums)
        actual_square_sum = sum(x * x for x in nums) 

        diff = actual_sum - expected_sum
        square_diff = actual_square_sum - expected_square_sum

        duplicate = (diff + square_diff // diff) // 2
        missing = duplicate - diff

        return [duplicate, missing]