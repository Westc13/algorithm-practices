class Solution:
    def maxSubsequence(self, nums: List[int], k: int) -> List[int]:
        k_largest = sorted(nums, reverse=True)[:k]
        k_largest_sorted = sorted(k_largest)

        result = []
        for num in nums:
            if num in k_largest_sorted:
                result.append(num)
                k_largest_sorted.remove(num)
            if len(result) == k:
                break
        return result