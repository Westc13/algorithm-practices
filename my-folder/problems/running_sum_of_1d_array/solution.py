class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        res = []
        running_sum = 0
        for i in range(len(nums)):
            running_sum += nums[i]
            res.append(running_sum)
        return res