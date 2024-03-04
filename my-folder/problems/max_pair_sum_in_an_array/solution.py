class Solution:
    def maxSum(self, nums: List[int]) -> int:
        
        max_digit_dict = {}
        max_sum_list = []

        for num in nums:
            max_digit = max(int(digit) for digit in str(num))
            max_digit_dict[num] = max_digit
        print(max_digit_dict)
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if max_digit_dict[nums[i]] == max_digit_dict[nums[j]]:
                    max_sum_list.append(nums[i] + nums[j])

        return max(max_sum_list, default=-1)