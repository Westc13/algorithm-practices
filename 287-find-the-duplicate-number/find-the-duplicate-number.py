class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        nums_freq = Counter(nums)
        for num, freq in nums_freq.items():
            if freq > 1:
                return num