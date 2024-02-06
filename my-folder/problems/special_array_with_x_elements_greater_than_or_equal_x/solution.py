class Solution:
    def specialArray(self, nums: List[int]) -> int:
        x_range = len(nums)
        for x in range(x_range + 1):
            count = sum(num >= x for num in nums)
            if count == x:
                return x
        return -1