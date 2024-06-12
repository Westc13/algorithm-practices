class Solution:
    def repeatedNTimes(self, nums: List[int]) -> int:
        num_freq = Counter(nums)
        n = len(nums) // 2
        for num, freq in num_freq.items():
            if freq == n:
                return num