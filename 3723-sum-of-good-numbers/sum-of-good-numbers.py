class Solution:
    def sumOfGoodNumbers(self, nums: List[int], k: int) -> int:
        n = len(nums)
        total_sum = 0
        
        for i in range(n):
            left_valid = (i - k >= 0)  
            right_valid = (i + k < n)
            
            left_condition = not left_valid or nums[i] > nums[i - k]
            right_condition = not right_valid or nums[i] > nums[i + k]
            
            if left_condition and right_condition:
                total_sum += nums[i]
        
        return total_sum