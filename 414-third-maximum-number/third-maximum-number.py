class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        # unique_nums = sorted(set(nums), reverse=True)

        # return unique_nums[2] if len(unique_nums) >=3 else unique_nums[0]

        first = second = third = float('-inf')
        for num in nums:
            if num > first:
                first, second, third = num, first, second
            elif first > num > second:
                second, third = num, second
            elif second > num > third:
                third = num
        return third if third != float('-inf') else first