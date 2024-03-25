class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        nums_freq = Counter(nums)
        result = []
        for num, freq in nums_freq.items():
            if freq > 1:
                result.append(num)
        return result