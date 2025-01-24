class Solution:
    def canBeIncreasing(self, nums: List[int]) -> bool:
        def is_strictly_increasing(arr):
            for i in range(1, len(arr)):
                if arr[i - 1] >= arr[i]:
                    return False
            return True
        
        for i in range(len(nums)):
            new_nums = nums[:i] + nums[i+1:]
            if is_strictly_increasing(new_nums):
                return True
        return False