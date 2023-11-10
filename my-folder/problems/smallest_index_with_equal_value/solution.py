class Solution:
    def smallestEqual(self, nums: List[int]) -> int:
        equals = []
        for i in range(len(nums)):
            if nums[i] == i % 10 :
                equals.append(i)
        if len(equals) == 0:
            return -1
        return min(equals)

        