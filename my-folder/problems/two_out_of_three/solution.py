class Solution:
    def twoOutOfThree(self, nums1: List[int], nums2: List[int], nums3: List[int]) -> List[int]:
        result = []
        for num in nums1:
            if num in nums2 or num in nums3:
                if num not in result:
                    result.append(num)
        for num in nums2:
            if num in nums1 or num in nums3:
                if num not in result:
                    result.append(num)
        for num in nums3:
            if num in nums1 or num in nums2:
                if num not in result:
                    result.append(num)
        return result
        