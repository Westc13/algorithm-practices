class Solution:
    def findSubarrays(self, nums: List[int]) -> bool:
        completed_sums = []

        for i in range(len(nums)-1):
            current_sum = nums[i] + nums[i+1]
            if current_sum in completed_sums:
                return True
            completed_sums.append(current_sum)
        return False