class Solution:
    def findLHS(self, nums: List[int]) -> int:
        freq_map = {}
        max_length = 0
        for num in nums:
            if num in freq_map:
                freq_map[num] += 1
            else:
                freq_map[num] = 1
        
        for num, freq in freq_map.items():
            if num + 1 in freq_map:
                max_length = max(max_length, freq + freq_map[num + 1])
        return max_length