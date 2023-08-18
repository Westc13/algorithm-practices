class Solution:
    def distinctDifferenceArray(self, nums: List[int]) -> List[int]:
        result = []     
        for i in range(len(nums)):
            before = set(nums[:i+1])
            after = set(nums[i+1:])
            result.append(len(before) - len(after))
        return result

            