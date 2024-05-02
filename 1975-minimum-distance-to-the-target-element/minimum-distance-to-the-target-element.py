class Solution:
    def getMinDistance(self, nums: List[int], target: int, start: int) -> int:
        all_poss = []
        for i, num in enumerate(nums):
            if num == target:
                all_poss.append(i)
        return min(abs(el - start) for el in all_poss)
