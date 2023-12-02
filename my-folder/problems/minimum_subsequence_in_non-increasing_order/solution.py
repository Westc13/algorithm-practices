class Solution:
    def minSubsequence(self, nums: List[int]) -> List[int]:
        half_sum = sum(nums)//2
        sorted_nums = sorted(nums, reverse=True)
        el_sum = 0
        result = []
        for num in sorted_nums:
            el_sum += num
            result.append(num)

            if el_sum > half_sum:
                return result
            
        
        
        