class Solution:
    def divideArray(self, nums: List[int]) -> bool:
        nums_freq = Counter(nums)
        for element in nums_freq:
            if nums_freq[element] % 2 != 0:
                return False
        return True