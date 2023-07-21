class Solution:
    def maximizeSum(self, nums: List[int], k: int) -> int:
        nums.sort(reverse=True)
        max_element = nums[0]
        result = 0
        for i in range(k):
            result += nums[0]
            nums[0] += 1
        return result

            
        return result
        
        