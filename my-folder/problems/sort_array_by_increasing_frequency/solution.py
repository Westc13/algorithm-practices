class Solution:
    def frequencySort(self, nums: List[int]) -> List[int]:
        count = Counter(nums)
        result = sorted(nums, key=lambda x: (count[x], -x))
        return result
        
           
        