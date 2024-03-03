class Solution:
    def minimumRightShifts(self, nums: List[int]) -> int:
        idx_of_min = min(range(len(nums)), key=lambda idx: nums[idx])
        
        for i in range(1, len(nums)):
            if not nums[(idx_of_min+i) % len(nums)] >= nums[(idx_of_min+i-1) % len(nums)]: return -1
        return len(nums) - idx_of_min if idx_of_min != 0 else 0
