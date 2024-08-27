class Solution:
    def canAliceWin(self, nums: List[int]) -> bool:
        single_digits = [num for num in nums if num < 10]
        double_digits = [num for num in nums if num >= 10]

        sum_single = sum(single_digits)
        sum_double = sum(double_digits)

        total_sum = sum(nums)

        sum_bob_single = total_sum - sum_single
        sum_bob_double = total_sum - sum_double

        if sum_single > sum_bob_single or sum_double > sum_bob_double:
            return True
        else:
            return False