class Solution:
    def getFinalState(self, nums: List[int], k: int, multiplier: int) -> List[int]:
        result = nums.copy()
        for _ in range(k):
            min_index = result.index(min(result))
            result[min_index] *= multiplier
        return result