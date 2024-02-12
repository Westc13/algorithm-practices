class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        result = 0
        nums_count = Counter(nums)
        for num, count in nums_count.items():
            if count > int(len(nums)/2):
                result = num
        return result
        