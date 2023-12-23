class Solution:
    def sumCounts(self, nums: List[int]) -> int:
        result = 0
        n = len(nums)
        for i in range(n):
            distinct_count = set()
            for j in range(i, n):
                distinct_count.add(nums[j])
                result += len(distinct_count)**2
        return result