class Solution:
    def minOperations(self, nums: List[int], k: int) -> int:
        k_range = range(1, k+1)
        collection = []
        for num in reversed(nums):
            if (all(x in collection for x in k_range)):
                break
            collection.append(num)
        return len(collection)