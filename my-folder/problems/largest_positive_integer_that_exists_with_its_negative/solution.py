class Solution:
    def findMaxK(self, nums: List[int]) -> int:
        result = []
        for i in range(len(nums)):
            if -nums[i] in nums:
                result.append(nums[i])
        if result:
            return max(result)
        else:
            return -1


        