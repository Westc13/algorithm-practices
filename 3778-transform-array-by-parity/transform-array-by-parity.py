class Solution:
    def transformArray(self, nums: List[int]) -> List[int]:
        transformed = [0 if num % 2 == 0 else 1 for num in nums]
        transformed.sort()
        return transformed