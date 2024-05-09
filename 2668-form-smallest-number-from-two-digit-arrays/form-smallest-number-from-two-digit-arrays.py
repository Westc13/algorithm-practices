class Solution:
    def minNumber(self, nums1: List[int], nums2: List[int]) -> int:
        combined = nums1 + nums2
        combined.sort()
        for num in combined:
            if num in nums1 and num in nums2:
                return num
        return min(nums1) * 10 + min(nums2) if min(nums1) < min(nums2) else min(nums2) * 10 + min(nums1)
