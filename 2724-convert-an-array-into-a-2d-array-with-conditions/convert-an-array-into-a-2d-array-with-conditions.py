class Solution:
    def findMatrix(self, nums: List[int]) -> List[List[int]]:
        freq = Counter(nums)
        rows = max(freq.values())
        result = [[] for _ in range(rows)]
        positions = {}
        for num in nums:
            if num not in positions:
                positions[num] = 0
            result[positions[num]].append(num)
            positions[num] += 1
        return result