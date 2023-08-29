class Solution:
    def numberOfPairs(self, nums: List[int]) -> List[int]:
        op_count = 0
        result = []
        num_freqs = Counter(nums)
        for element in num_freqs:
            if num_freqs[element] >= 2:
                op_count += num_freqs[element] // 2
            
        result.append(op_count)
        result.append(len(nums) - op_count *2)
        return result
            