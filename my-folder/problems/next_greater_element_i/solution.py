class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        result = []
        for num in nums1:
            if num in nums2:
                index_in_nums2 = nums2.index(num)
                next_great = -1
                for i in range(index_in_nums2 + 1, len(nums2)):
                    if nums2[i] > num:
                        next_great = nums2[i]
                        break
                result.append(next_great)
        return result