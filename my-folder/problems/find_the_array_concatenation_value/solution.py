class Solution:
    def findTheArrayConcVal(self, nums: List[int]) -> int:
        result = 0
        while len(nums) != 0:
            if len(nums) > 1:
                first, last = 0, len(nums) - 1
                result += int(str(nums[first]) + str(nums[last]))
                nums.pop(last)
                nums.pop(first)
            else:
                result += nums[0]
                nums.pop(0)
        return result
        