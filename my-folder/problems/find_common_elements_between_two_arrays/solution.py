class Solution:
    def findIntersectionValues(self, nums1: List[int], nums2: List[int]) -> List[int]:
        n, m = len(nums1), len(nums2)
        nums1_in_nums2, nums2_in_nums1 = 0, 0
        for i in range(n):
            if nums1[i] in nums2:
                nums1_in_nums2 += 1

        for j in range(m):
            if nums2[j] in nums1:
                nums2_in_nums1 += 1
        
        return [nums1_in_nums2, nums2_in_nums1]