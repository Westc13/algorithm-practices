class Solution:
    def findShortestSubArray(self, nums: List[int]) -> int:
        freq = {}
        first_occ = {}
        last_occ = {}
        max_degree = 0

        for i, num in enumerate(nums):
            if num not in freq:
                freq[num] = 1
                first_occ[num] = i
            else:
                freq[num] += 1
            last_occ[num] = i
            max_degree = max(max_degree, freq[num])
        shortest_subarr_len = len(nums)

        for num, fr in freq.items():
            if fr == max_degree:
                shortest_subarr_len = min(shortest_subarr_len, last_occ[num] - first_occ[num] + 1)
        return shortest_subarr_len