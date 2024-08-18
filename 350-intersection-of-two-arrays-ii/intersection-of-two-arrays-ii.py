class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        # result = []
        # nums1_freq = Counter(nums1)
        # nums2_freq = Counter(nums2)
        # for num in nums1_freq:
        #     if num in nums2_freq:
        #         result.extend([num] * min(nums1_freq[num], nums2_freq[num]))
        # return result

        # For sorted arrays
        nums1 = sorted(nums1)
        nums2 = sorted(nums2)
        result = []
        i, j = 0, 0

        while i < len(nums1) and j < len(nums2):
            if nums1[i] < nums2[j]:
                i += 1
            elif nums1[i] > nums2[j]:
                j += 1
            else:
                result.append(nums1[i])
                i += 1
                j += 1
        return result