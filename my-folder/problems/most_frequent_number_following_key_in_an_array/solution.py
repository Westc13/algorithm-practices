class Solution:
    def mostFrequent(self, nums: List[int], key: int) -> int:
        targets = []
        for i in range(len(nums) - 1):
            if nums[i] == key:
                targets.append(nums[i+1])
        return max(set(targets), key = targets.count)