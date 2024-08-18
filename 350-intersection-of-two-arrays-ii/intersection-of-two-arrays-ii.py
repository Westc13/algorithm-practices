class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        result = []
        nums1_freq = Counter(nums1)
        nums2_freq = Counter(nums2)
        for num in nums1_freq:
            if num in nums2_freq:
                result.extend([num] * min(nums1_freq[num], nums2_freq[num]))
        return result