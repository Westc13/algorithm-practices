class Solution:
    def isPossibleToSplit(self, nums: List[int]) -> bool:
        num_freq = Counter(nums)
        for freq in num_freq.values():
            if freq > 2:
                return False
        return True