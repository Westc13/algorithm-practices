class Solution:
    def findDifference(self, nums1: List[int], nums2: List[int]) -> List[List[int]]:
        unique1 = []
        unique2 = []
        result = []
        for num in nums1:
            if num not in nums2 and num not in unique1:
                unique1.append(num)
        result.append(unique1)
        for num in nums2:
            if num not in nums1 and num not in unique2:
                unique2.append(num)
        result.append(unique2)
        return result