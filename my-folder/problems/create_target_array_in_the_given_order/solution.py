class Solution:
    def createTargetArray(self, nums: List[int], index: List[int]) -> List[int]:
        target = []
        for num, indice in zip(nums, index):
            target.insert(indice, num)
            index = [ i + 1 for i in index]
        return target