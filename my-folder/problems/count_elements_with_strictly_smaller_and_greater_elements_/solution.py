class Solution:
    def countElements(self, nums: List[int]) -> int:
        nums.sort()
        result = []
        if len(nums) < 3:
            return 0
        for i in range(1, len(nums)):
            if nums[i] > nums[0] and nums[i] < nums[-1]:
                result.append(nums[i])
        return len(result)
        
        