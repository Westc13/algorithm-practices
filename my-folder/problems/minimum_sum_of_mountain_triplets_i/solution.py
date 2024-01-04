class Solution:
    def minimumSum(self, nums: List[int]) -> int:
        n = len(nums)
        result = float('inf')
        for j in range(1, n-1):
            for i in range(j):
                for k in range(j+1,n):
                    if nums[i] < nums[j] and nums[k] < nums[j]:
                        triplet_sum = nums[i] + nums[j] + nums[k]
                        result = min(result, triplet_sum)                       
        return result if result != float('inf') else -1
            