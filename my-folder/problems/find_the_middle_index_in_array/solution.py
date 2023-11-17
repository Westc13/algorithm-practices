class Solution:
    def findMiddleIndex(self, nums: List[int]) -> int:
        answer = []
        for i in range(len(nums)):
            if sum(nums[0:i+1]) == sum(nums[i:]):
                answer.append(i)
        if answer:
            return answer[0]
        return -1
        